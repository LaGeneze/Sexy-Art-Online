const Discord = require('Discord.js')
const bot = new Discord.Client()
const rando_imgs_Asuna = [
'https://pbs.twimg.com/media/D-Ko1AVX4AIZrHH',
'http://matome.anhona.com/wp-content/uploads/2012/11/20121111sao081.jpg',
'https://static6.hentai-image.com/upload/20180530/452/461839/8.jpg',
]

var NombreImageAsuna = 10;
var NombreImageLeafa = 6;
var NombreImageSinon = 7;
var NombreImageAlice = 3;
var NombreImageLisbeth = 5;
var NombreImageYuuki = 3;
var NombreImageAll = 6;

var NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna);
var NombreAleatoireLeafa = Math.floor(Math.random() * NombreImageLeafa);
var NombreAleatoireSinon = Math.floor(Math.random() * NombreImageSinon);
var NombreAleatoireAlice = Math.floor(Math.random() * NombreImageAlice);
var NombreAleatoireLisbeth = Math.floor(Math.random() * NombreImageLisbeth);
var NombreAleatoireYuuki = Math.floor(Math.random() * NombreImageYuuki);
var NombreAleatoireAll = Math.floor(Math.random() * NombreImageAll);

var reponse;

//Instance
bot.on('ready', function(){
	bot.user.setGame('>help').catch(console.error)
})

bot.on('message', function (message){
	if (message.content === '>help'){
		message.channel.send('Commandes (séparé par un ; ) : >Asuna ; >Leafa ; >Sinon ; >Alice ; >Lisbeth ; >Yuuki ; >All')
	}



})

bot.on('message', function (message){
	if (message.content === '>Asuna'){
	    			if(NombreAleatoireAsuna === 0){
		    		message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna01.jpg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireAsuna === 1){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna02.jpg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
    			}else{
    				if(NombreAleatoireAsuna === 2){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna03.jpg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
    			}else{
    				if(NombreAleatoireAsuna === 3){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna04.jpg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
    			}else{
    				if(NombreAleatoireAsuna === 4){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna05.jpg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
    			}else{
    				if(NombreAleatoireAsuna === 5){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna06.jpeg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
    			}else{
    				if(NombreAleatoireAsuna === 6){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna07.jpg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
    			}else{
    				if(NombreAleatoireAsuna === 7){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna08.jpg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
 				}else{
 					if(NombreAleatoireAsuna === 8){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna09.jpg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
 				}else{
 					if(NombreAleatoireAsuna === 9){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Asuna10.jpeg')
					console.log("Commandes effectué")
					NombreAleatoireAsuna = ''
					NombreAleatoireAsuna = Math.floor(Math.random() * NombreImageAsuna)
					console.log("Variable Random effectué")
				}
}
}
} 
}
}
}
}
}
}
}
})

bot.on('message', function (message){
	if (message.content === '>Leafa'){
					if(NombreAleatoireLeafa === 0){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Leafa01.jpg')
					console.log("Commandes effectué")
					NombreAleatoireLeafa = ''
					NombreAleatoireLeafa = Math.floor(Math.random() * NombreImageLeafa)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireLeafa === 1){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Leafa02.jpeg')
					console.log("Commandes effectué")
					NombreAleatoireLeafa = ''
					NombreAleatoireLeafa = Math.floor(Math.random() * NombreImageLeafa)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireLeafa === 2){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Leafa03.jpg')
					console.log("Commandes effectué")
					NombreAleatoireLeafa = ''
					NombreAleatoireLeafa = Math.floor(Math.random() * NombreImageLeafa)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireLeafa === 3){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Leafa04.jpg')
					console.log("Commandes effectué")
					NombreAleatoireLeafa = ''
					NombreAleatoireLeafa = Math.floor(Math.random() * NombreImageLeafa)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireLeafa === 4){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Leafa05.jpg')
					console.log("Commandes effectué")
					NombreAleatoireLeafa = ''
					NombreAleatoireLeafa = Math.floor(Math.random() * NombreImageLeafa)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireLeafa === 5){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Leafa06.jpg')
					console.log("Commandes effectué")
					NombreAleatoireLeafa = ''
					NombreAleatoireLeafa = Math.floor(Math.random() * NombreImageLeafa)
					console.log("Variable Random effectué")
				}
}	
}
}
}
}
}
})
bot.on('message', function (message){
	if (message.content === '>Sinon'){
					if(NombreAleatoireSinon === 0){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Sinon01.jpg')
					console.log("Commandes effectué")
					NombreAleatoireSinon = ''
					NombreAleatoireSinon = Math.floor(Math.random() * NombreImageSinon)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireSinon === 1){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Sinon02.jpg')
					console.log("Commandes effectué")
					NombreAleatoireSinon = ''
					NombreAleatoireSinon = Math.floor(Math.random() * NombreImageSinon)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireSinon === 2){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Sinon03.jpg')
					console.log("Commandes effectué")
					NombreAleatoireSinon = ''
					NombreAleatoireSinon = Math.floor(Math.random() * NombreImageSinon)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireSinon === 3){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Sinon04.jpg')
					console.log("Commandes effectué")
					NombreAleatoireSinon = ''
					NombreAleatoireSinon = Math.floor(Math.random() * NombreImageSinon)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireSinon === 4){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Sinon05.jpg')
					console.log("Commandes effectué")
					NombreAleatoireSinon = ''
					NombreAleatoireSinon = Math.floor(Math.random() * NombreImageSinon)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireSinon === 5){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Sinon06.jpg')
					console.log("Commandes effectué")
					NombreAleatoireSinon = ''
					NombreAleatoireSinon = Math.floor(Math.random() * NombreImageSinon)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireSinon === 6){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Sinon07.jpg')
					console.log("Commandes effectué")
					NombreAleatoireSinon = ''
					NombreAleatoireSinon = Math.floor(Math.random() * NombreImageSinon)
					console.log("Variable Random effectué")
				}
}
}
}
}
}
}
}
})
bot.on('message', function (message){
		if (message.content === '>Alice'){
					if(NombreAleatoireAlice === 0){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Alice01.png')
					console.log("Commandes effectué")
					NombreAleatoireAlice = ''
					NombreAleatoireAlice = Math.floor(Math.random() * NombreImageAlice)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireAlice === 1){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Alice02.png')
					console.log("Commandes effectué")
					NombreAleatoireAlice = ''
					NombreAleatoireAlice = Math.floor(Math.random() * NombreImageAlice)
					console.log("Variable Random effectué")
				}else{
					if(NombreAleatoireAlice === 2){
					message.channel.send('https://DataBaseServeur.000webhostapp.com/Alice03.jpeg')
					console.log("Commandes effectué")
					NombreAleatoireAlice = ''
					NombreAleatoireAlice = Math.floor(Math.random() * NombreImageAlice)
					console.log("Variable Random effectué")
}
}
}
}
		if (message.content === '>Lisbeth'){
						if(NombreAleatoireLisbeth === 0){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/Lisbeth01.jpg')
						console.log("Commandes effectué")
						NombreAleatoireLisbeth = ''
						NombreAleatoireLisbeth = Math.floor(Math.random() * NombreImageLisbeth)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireLisbeth === 1){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/Lisbeth02.jpg')
						console.log("Commandes effectué")
						NombreAleatoireLisbeth = ''
						NombreAleatoireLisbeth = Math.floor(Math.random() * NombreImageLisbeth)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireLisbeth === 2){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/Lisbeth03.jpg')
						console.log("Commandes effectué")
						NombreAleatoireLisbeth = ''
						NombreAleatoireLisbeth = Math.floor(Math.random() * NombreImageLisbeth)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireLisbeth === 3){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/Lisbeth04.jpg')
						console.log("Commandes effectué")
						NombreAleatoireLisbeth = ''
						NombreAleatoireLisbeth = Math.floor(Math.random() * NombreImageLisbeth)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireLisbeth === 4){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/Lisbeth05.jpg')
						console.log("Commandes effectué")
						NombreAleatoireLisbeth = ''
						NombreAleatoireLisbeth = Math.floor(Math.random() * NombreImageLisbeth)
						console.log("Variable Random effectué")
					}
}
}
}
}
}
})
bot.on('message', function (message){
		if (message.content === '>Yuuki'){
						if(NombreAleatoireYuuki === 0){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/Yuuki01.jpg')
						console.log("Commandes effectué")
						NombreAleatoireYuuki = ''
						NombreAleatoireYuuki = Math.floor(Math.random() * NombreImageYuuki)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireYuuki === 1){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/Yuuki02.jpg')
						console.log("Commandes effectué")
						NombreAleatoireYuuki = ''
						NombreAleatoireYuuki = Math.floor(Math.random() * NombreImageYuuki)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireYuuki === 2){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/Yuuki03.jpg')
						console.log("Commandes effectué")
						NombreAleatoireYuuki = ''
						NombreAleatoireYuuki = Math.floor(Math.random() * NombreImageYuuki)
						console.log("Variable Random effectué")
}
}
}
}
})
bot.on('message', function (message){
		if (message.content === '>All'){
						if(NombreAleatoireAll === 0){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/All01.png')
						console.log("Commandes effectué")
						NombreAleatoireAll = ''
						NombreAleatoireAll = Math.floor(Math.random() * NombreImageAll)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireAll === 1){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/All02.jpg')
						console.log("Commandes effectué")
						NombreAleatoireAll = ''
						NombreAleatoireAll = Math.floor(Math.random() * NombreImageAll)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireAll === 2){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/All03.jpg')
						console.log("Commandes effectué")
						NombreAleatoireAll = ''
						NombreAleatoireAll = Math.floor(Math.random() * NombreImageAll)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireAll === 3){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/All04.jpg')
						console.log("Commandes effectué")
						NombreAleatoireAll = ''
						NombreAleatoireAll = Math.floor(Math.random() * NombreImageAll)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireAll === 4){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/All05.jpg')
						console.log("Commandes effectué")
						NombreAleatoireAll = ''
						NombreAleatoireAll = Math.floor(Math.random() * NombreImageAll)
						console.log("Variable Random effectué")
					}else{
						if(NombreAleatoireAll === 5){
						message.channel.send('https://DataBaseServeur.000webhostapp.com/All06.jpeg')
						console.log("Commandes effectué")
						NombreAleatoireAll = ''
						NombreAleatoireAll = Math.floor(Math.random() * NombreImageAll)
						console.log("Variable Random effectué")
}
}
}
}
}
}
}
})
	//if (message.content === '>Asuna'){
		//if (nombreAleatoire = 1){
		//	reponse = message.channel.send('https://pbs.twimg.com/media/D-Ko1AVX4AIZrHH.jpg')
		//}
		//}else{
			//reponse = message.channel.send('http://matome.anhona.com/wp-content/uploads/2012/11/20121111sao081.jpg')
		//}
	//}
//)


    

bot.login(process.env.TOKEN)





//if(nombreAleatoire = 1){
	   	 //	reponse = message.channel.send('1ère reponse')
		//} else {
	    //	reponse = message.channel.send('2ème réponse')
		//}


		//'message', message =>
