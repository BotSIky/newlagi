let handler = async (m, { conn, usedPrefix, command }) => {
let moneyy = `${Math.floor(Math.random() * 5000)}`.trim()
global.db.data.users[m.sender].money += moneyy * 1

    conn.send1But(m.chat, wm, 'Klik Kak', 'Halo \n Aku Mau Ngaku kalo Aku Anak Haram', m)
}
handler.help = ['halo']
handler.tags = ['fun']
handler.limit = true
handler.command = /^(halo)$/i

module.exports = handler