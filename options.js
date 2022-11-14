module.exports = {
    optionsStart: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Овен', callback_data: '/aries'}, {text: 'Телец', callback_data: '/taurus'}, {
                    text: 'Близнецы',
                    callback_data: '/gemini'
                }],
                [{text: 'Рак', callback_data: '/cancer'}, {text: 'Лев', callback_data: '/leo'}, {
                    text: 'Дева',
                    callback_data: '/virgo'
                }],
                [{text: 'Весы', callback_data: '/libra'}, {text: 'Скорпион', callback_data: '/scorpio'}, {
                    text: 'Стрелец',
                    callback_data: '/sagittarius'
                }],
                [{text: 'Козерог', callback_data: '/capricorn'}, {text: 'Водолей', callback_data: '/aquarius'}, {
                    text: 'Рыбы',
                    callback_data: '/pisces'
                }],
            ]
        })
    },
    optionsMainMenu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Общий гороскоп', callback_data: 'com'},{text: 'Эротический гороскоп', callback_data: 'ero'}, {text: 'Любовный гороскоп', callback_data: 'lov'}]
            ]
        })
    },

    optionsMenu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Меню', callback_data: '/menu'}]
            ]
        })
    }

}