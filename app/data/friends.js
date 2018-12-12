var friends = [
	{
		name: 'Fox McCloud',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fpoohadventures%2Fimages%2F3%2F39%2FFox4.png%2Frevision%2Flatest%3Fcb%3D20140923170448&imgrefurl=http%3A%2F%2Fpoohadventures.wikia.com%2Fwiki%2FFox_McCloud&docid=VtK11BtSWrKj5M&tbnid=jez34QwEsIPHiM%3A&vet=10ahUKEwiMtPiawJnfAhUimeAKHV1ZCOkQMwhuKAQwBA..i&w=318&h=391&bih=819&biw=1707&q=fox%20mccloud&ved=0ahUKEwiMtPiawJnfAhUimeAKHV1ZCOkQMwhuKAQwBA&iact=mrc&uact=8',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Arcanine',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2Fthumb%2Fb%2Fb8%2F059Arcanine.png%2F1200px-059Arcanine.png&imgrefurl=https%3A%2F%2Fbulbapedia.bulbagarden.net%2Fwiki%2FArcanine_(Pok%25C3%25A9mon)&docid=W94LQ92OqNAkwM&tbnid=JtZhXhEWMuxlcM%3A&vet=10ahUKEwiJntuywJnfAhUGJt8KHdIgARcQMwhrKAAwAA..i&w=1200&h=1200&bih=819&biw=1707&q=arcanine&ved=0ahUKEwiJntuywJnfAhUGJt8KHdIgARcQMwhrKAAwAA&iact=mrc&uact=8',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	},
	{
		name: 'Ness',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fvsbattles%2Fimages%2Fe%2Fe9%2F1528831372701.png%2Frevision%2Flatest%3Fcb%3D20180613121812&imgrefurl=http%3A%2F%2Fvsbattles.wikia.com%2Fwiki%2FNess&docid=zJ8lQ9Zi-GfG2M&tbnid=BBurhbe7CNIR9M%3A&vet=10ahUKEwjJxOHFwJnfAhUGU98KHQkWDPcQMwhqKAAwAA..i&w=880&h=1289&bih=819&biw=1707&q=ness&ved=0ahUKEwjJxOHFwJnfAhUGU98KHQkWDPcQMwhqKAAwAA&iact=mrc&uact=8',
		scores: [
			'4',
			'3',
			'5',
			'1',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1'
		]
	},
	{
		name: 'Wolf',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.change.org%2Fphotos%2F1%2Fix%2Fwl%2FQxixWLkxpAcvczd-800x450-noPad.jpg%3F1522392916&imgrefurl=https%3A%2F%2Fwww.change.org%2Fp%2Fmasahiro-sakurai-add-wolf-o-donnel-from-the-star-fox-nintendo-series-as-downloadable-content-to-super-smash-bros-for-wii-u-and-3ds&docid=HvwO3lm39G-8-M&tbnid=1p_3vHh_DIZU2M%3A&vet=10ahUKEwjLwv_XwJnfAhWGmOAKHTy2Ct0QMwhiKAQwBA..i&w=338&h=430&bih=819&biw=1707&q=wolf%20star%20fox&ved=0ahUKEwjLwv_XwJnfAhWGmOAKHTy2Ct0QMwhiKAQwBA&iact=mrc&uact=8',
		scores: [
			'5',
			'1',
			'2',
			'1',
			'3',
			'4',
			'1',
			'3',
			'3',
			'4'
		]
	},
	{
		name: 'Pichu',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ssbwiki.com%2Fimages%2Fthumb%2Fc%2Fc1%2FPichu_SSBU.png%2F250px-Pichu_SSBU.png&imgrefurl=https%3A%2F%2Fwww.ssbwiki.com%2FPichu_(SSBU)&docid=zAUPB4_pvZLweM&tbnid=zJZMCe-WycunwM%3A&vet=10ahUKEwjUvdj-wJnfAhUFOKwKHdOnAacQMwhrKAAwAA..i&w=250&h=250&bih=819&biw=1707&q=Pichu&ved=0ahUKEwjUvdj-wJnfAhUFOKwKHdOnAacQMwhrKAAwAA&iact=mrc&uact=8',
		scores: [
			'1',
			'1',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'1'
		]
	},
	{
		name: 'King K. Rool',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F7%2F70%2FKing_K._Rool_Smash_Ultimate.png%2F220px-King_K._Rool_Smash_Ultimate.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKing_K._Rool&docid=41I0ZYQgAKJStM&tbnid=Qjad3crw-9TvzM%3A&vet=10ahUKEwjjipGPwZnfAhUHGKwKHeARDUoQMwhrKAAwAA..i&w=220&h=208&bih=819&biw=1707&q=King%20k%20rool&ved=0ahUKEwjjipGPwZnfAhUHGKwKHeARDUoQMwhrKAAwAA&iact=mrc&uact=8',
		scores: [
			'1',
			'1',
			'5',
			'1',
			'3',
			'2',
			'5',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Roy',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fp__%2Fimages%2F9%2F9d%2FRoy_SSBU.png%2Frevision%2Flatest%3Fcb%3D20180618044350%26path-prefix%3Dprotagonist&imgrefurl=http%3A%2F%2Fhero.wikia.com%2Fwiki%2FRoy_(Fire_Emblem)&docid=ZsZaOgku4wfX1M&tbnid=5n8KgeqbEy8USM%3A&vet=10ahUKEwiOi-OtwZnfAhUGKK0KHW8SCjAQMwhtKAMwAw..i&w=1573&h=1610&bih=819&biw=1707&q=roy%20fire%20emblem&ved=0ahUKEwiOi-OtwZnfAhUGKK0KHW8SCjAQMwhtKAMwAw&iact=mrc&uact=8',
		scores: [
			'5',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
	},
	{
		name: 'Dark Samus',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ssbwiki.com%2Fimages%2Fthumb%2Fa%2Fa6%2FDark_Samus_SSBU.png%2F250px-Dark_Samus_SSBU.png&imgrefurl=https%3A%2F%2Fwww.ssbwiki.com%2FDark_Samus_(SSBU)&docid=xoLc_s1BgyJVHM&tbnid=anDPCphNoEKcdM%3A&vet=10ahUKEwitofHhwZnfAhWJd98KHayOCrAQMwhrKAAwAA..i&w=250&h=250&bih=819&biw=1707&q=dark%20samus&ved=0ahUKEwitofHhwZnfAhWJd98KHayOCrAQMwhrKAAwAA&iact=mrc&uact=8',
		scores: [
			'5',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Daisy',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fb%2Fbd%2FDaisy_%2528Super_Mario_Party%2529.png%2F220px-Daisy_%2528Super_Mario_Party%2529.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPrincess_Daisy&docid=J3Dz0KZCfwwM7M&tbnid=WfZm01X0iCfj9M%3A&vet=10ahUKEwiJveiZwpnfAhUSI6wKHZsxDlUQMwhpKAAwAA..i&w=220&h=340&bih=819&biw=1707&q=daisy%20mario&ved=0ahUKEwiJveiZwpnfAhUSI6wKHZsxDlUQMwhpKAAwAA&iact=mrc&uact=8',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},
	{
		name: 'kirby',
		photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F5%2F5c%2FKirby.png%2F220px-Kirby.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKirby_(character)&docid=BwwlwJkdrPgWKM&tbnid=zaBiF69o93X2qM%3A&vet=10ahUKEwjZnqavwpnfAhVGd6wKHXlwCa0QMwhrKAAwAA..i&w=220&h=290&bih=819&biw=1707&q=kirby&ved=0ahUKEwjZnqavwpnfAhVGd6wKHXlwCa0QMwhrKAAwAA&iact=mrc&uact=8',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
	}
];

module.exports = friends;