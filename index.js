const mineflayer = require('mineflayer')
const config = require('./config.json')

const {
    pathfinder,
    Movements,
    goals
} = require('mineflayer-pathfinder')

const GoalFollow = goals.GoalFollow
const GoalNear = goals.GoalNear

function createBot() {

    const bot = mineflayer.createBot({
        host: config.host,
        port: config.port,
        username: config.username
    })

    // Load Pathfinder
    bot.loadPlugin(pathfinder)

    bot.once('spawn', () => {

        console.log('✅ Hexorpie joined the server!')

        const mcData = require('minecraft-data')(bot.version)

        const defaultMove = new Movements(bot, mcData)

        bot.pathfinder.setMovements(defaultMove)
    })

    bot.on('chat', (username, message) => {

        if (username === bot.username) return

        // Owner only
        if (username !== config.owner) return

        // Help
        if (message === '!help') {
            bot.chat('Commands: !help, !ping, !jump, !follow, !come, !stop')
        }

        // Ping
        if (message === '!ping') {
            bot.chat('Pong!')
        }

        // Jump
        if (message === '!jump') {

            bot.setControlState('jump', true)

            setTimeout(() => {
                bot.setControlState('jump', false)
            }, 500)

            bot.chat('Jumped!')
        }

        // Follow
        if (message === '!follow') {

            const player = bot.players[username]

            if (!player || !player.entity) {
                bot.chat('Cannot find you.')
                return
            }

            bot.chat('Following you.')

            bot.pathfinder.setGoal(
                new GoalFollow(player.entity, 2),
                true
            )
        }

        // Come
        if (message === '!come') {

            const player = bot.players[username]

            if (!player || !player.entity) {
                bot.chat('Cannot find you.')
                return
            }

            const pos = player.entity.position

            bot.pathfinder.setGoal(
                new GoalNear(
                    pos.x,
                    pos.y,
                    pos.z,
                    1
                )
            )

            bot.chat('Coming.')
        }

        // Stop
        if (message === '!stop') {

            bot.pathfinder.setGoal(null)

            bot.chat('Stopped.')
        }

    })

    bot.on('end', () => {

        console.log('❌ Disconnected.')

        console.log('🔄 Reconnecting in 10 seconds...')

        setTimeout(createBot, 10000)
    })

    bot.on('error', err => {
        console.log(err)
    })
}

createBot()