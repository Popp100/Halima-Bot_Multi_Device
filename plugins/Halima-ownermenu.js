import fetch from 'node-fetch';
const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
  '😍', '🥰', '😘', '😗', '😋', '😛', '😜', '🤪', '😝', '🤑',
  '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏',
  '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷',
  '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯',
  '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '😮', '😯',
  '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭',
  '😱', '😖', '😣', '😞', '😓', '😩', '😫', '😤', '😡', '😠',
  '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻',
  '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽',
  '🙀', '😿', '😾', '👐', '🙌', '👏', '🤝', '👍', '👎', '👊',
  '✊', '🤛', '🤜', '🤞', '✌️', '🤟', '🤘', '👌', '👈', '👉',
  '👆', '👇', '☝️', '✋', '🤚', '🖐️', '🖖', '👋', '🤙', '💪',
  '🦵', '🦶', '🖕', '🙏', '🦰', '🦱', '🦲', '🦳', '🦴', '🦷',
  '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👵', '🧓', '👴',
  '👮', '🕵️', '👷', '💂', '👸', '👳', '👲', '🧕', '🤵', '👰',
  '🤰', '🤱', '👼', '🎅', '🤶', '🦸', '🦹', '🧙', '🧚', '🧛',
  '🧜', '🧝', '🧞', '🧟', '💆', '💇', '🚶', '🧍', '🧎', '🧑‍🦯',
  '👨‍🦯', '👩‍🦯', '🧑‍🦼', '👨‍🦼', '👩‍🦼', '🧑‍🦽', '👨‍🦽', '👩‍🦽', '🏃', '💃',
  '🕺', '🕴️', '🧖', '🧗', '🤺', '🏇', '⛷️', '🏂', '🏌️', '🏄',
  '🚣', '🏊', '⛹️', '🏋️', '🚴', '🚵', '🤸', '🤼', '🤽', '🤾',
  '🤹', '🧘', '🛀', '🛌', '🕯️', '🎖️', '🏆', '🏅', '🥇', '🥈',
  '🥉', '🎗️', '🏵️', '🎫', '🎟️', '🎪', '🤹‍♂️', '🤹‍♀️', '🎭', '🩰',
  '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸',
  '🎻', '🎲', '🧩', '🎮', '🎳', '🎯', '🎰', '🎳', '🏈', '🏀',
  '⚽', '⚾', '🥎', '🏐', '🏉', '🎾', '🥏', '🎱', '🏓', '🏸',
  '🏒', '🏑', '🥍', '🏏', '⛳', '🥊', '🥋', '🥅', '⛸️', '🎣',
  '🤿', '🎽', '🛹', '🛼', '🛶', '🎿', '🛷', '🪂', '🏹', '🎯'];

let handler = async function (m, { conn, text, usedPrefix }) {
  let m2 = `
  ≡ *Can only be used by the bot owner* ≡

┌─⊷☾ *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* ☽︎━━◈
┃▢➥ *.block*
┃▢➥ *.unblock*
┃▢➥ *.setprefix [prefix]*
┃▢➥ *.expired*
┃▢➥ *.addprem*
┃▢➥ *.banchat*
┃▢➥ *.listban*
┃▢➥ *.ban*
┃▢➥ *.broadcast*
┃▢➥ *.cleartmp*
┃▢➥ *.delexpired*
┃▢➥ *.delprem*
┃▢➥ *.getplugin*
┃▢➥ *.join*
┃▢➥ *.reset*
┃▢➥ *.restart*
┃▢➥ *.unbanchat*
┃▢➥ *.unban*
┃▢➥ *.update*
└───────────◈\n*ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ᴀʙᴅᴜʟ*
  `;

  let pp = './src/fg_logo.jpg';
  conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl);
 // conn.sendReadReceipt(m.chat, m.key); // Mark the message as read
 // conn.toggleDisappearingMessages(m.chat, 0); // Disable disappearing messages
  //conn.react(m.chat, m.key.id, '👨‍💻'); // React to the message with the "👨‍💻" emoji
};

handler.all = true; // Set 'all' property to true to react to every message

handler.help = ['ownermenu'];
handler.tags = ['main1'];
handler.command = ['ownermenu'];

export default handler;
