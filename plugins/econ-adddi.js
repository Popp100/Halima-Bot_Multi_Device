//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Tag a user'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Enter the amount of *Diamonds* you want to add'
    if (isNaN(txt)) throw '🔢 Numbers only'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Mínimum is  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *Diamonds💎*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Got \n\n *+${dmt}* Diamonds`, who, m.text)
}

handler.help = ['add_di']
handler.tags = ['econ']
handler.command = ['adddi','diamonds','+almasi'] 
handler.rowner = true

export default handler

