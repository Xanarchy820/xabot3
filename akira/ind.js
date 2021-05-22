exports.wait = () => {
	return`*「 ESPERA 」 _EN PROCESO_*`
}

exports.succes = () => {
	return`*「 LISTO 」*`
}

exports.lvlon = () => {
	return`*「 ACTIVO」 NIVELES*`
}

exports.lvloff = () => {
	return`*「 DESACTIVO 」 NIVELES*`
}

exports.lvlnul = () => {
	return`*TU NIVEL CORRESPONDE A 0*`
}

exports.baned = () => {
	return`*MI CREADOR TE DIO BAN*`
}

exports.lvlnoon = () => {
	return`*NIVEL NO ACTIVO EN ESTE GRUPO*`
}

exports.noregis = () => {
	return`*「 NO ESTAS REGISTRADO」*\n\n*Escribe ${prefix}daftar nombre|edad para registrarte*\n* ejemplo= ${prefix}daftar ${pushname}|18*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*Ya estás registrado en la base de datos del bot*`
}

exports.stikga = () => {
	return`*Si falló intentar repetir en unos momentos, se paciente*`
}

exports.linkga = () => {
	return`*Lo siento enlace inválido*`
}

exports.groupo = () => {
	return`*「SOLO EN GRUPOS」*`
}

exports.ownerb = () => {
	return`*「SOLO EL DUEÑO DEL BOT」*`
}

exports.ownerg = () => {
	return`*「SOLO EL DUEÑO DEL GRUPO」*`
}

exports.admin = () => {
	return`*「SOLO ADMINS DEL GRUPO」*`
}

exports.badmin = () => {
	return`*「EL BOT DEBE SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW ACTIVO*`
}

exports.bug = () => {
	return`*Se han informado problemas al propietario del BOT, no se responderá a los informes falsos*`
}

exports.wrongf = () => {
	return`*Formato incorrecto / texto en blanco*`
}

exports.clears = () => {
	return`*Borrado todo con éxito*`
}

exports.pc = () => {
	return`*「 REGISTRADO 」*\n\nPara saber si se ha registrado, consulte el mensaje que le envié \n\nNOTA:\n*si no ha recibido el mensaje. significa que no ha guardado su número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATOS DE USUARIO」*\n\nte has registrado con los datos \n\n┏━➤nombre\n┗➤${namaUser}\n┏━➤número\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤dinero\n┗➤${umurUser}\n┏━➤tiempo de registro\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTA : no olvide guardar el número de administrador de Xanarchy Bot y no olvide escribir ${prefix}reglas antes de iniciar el bot`
}

exports.owneresce = (pushname) => {
	return`*perdón pero ${pushname} no, el script es del propietario*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Perdón ${pushname} tu nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${aha}*\n\n_NOTE : CHATEA / SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Perdón ${pushname} tu nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahb}*\n\n_NOTE : CHATEA / SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Perdón ${pushname} tu nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahc}*\n\n_NOTE : CHATEA / SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Perdón ${pushname} tu nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahd}*\n\n_NOTE : CHATEA / SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Perdón ${pushname} tu nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahe}*\n\n_NOTE : CHATEA / SIEMPRE PARA OBTENER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Perdón ${pushname} tu nivel no es suficiente*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando: ${command}*\n*┗⊱requisitos de nivel : ${ahf}*\n\n_NOTE : CHATEA / SIEMPRE PARA OBTENER XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SUBISTE DE NIVEL 」*
┏𖥻ꦼꦽ➳ *Nombre* : ${pushname}
┣𖥻ꦼꦽ➳ *Numero* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Lo siento ${pushname} tu limite se agota*\n*el límite se reestablece cada 24 horas*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DE USUARIOS 」*
el resto de tu límite : ${limitCounts}

NOTE : Daiski`
}

exports.satukos = () => {
	return`Agregar parametro 1 para habilitar, 0 desactivar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nombre* : ${pushname}\n┣𖥻ꦼꦽ➳ *Numero* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}
