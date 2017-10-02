const CONSONANTS = 'CONSONANTS'
const VOWELS = 'VOWELS'

export const setNames = [ CONSONANTS, VOWELS ]

export const sets = {
	[CONSONANTS]: [ 
		{ id: 0, character: 'ㄱ', sounds: ['g', 'k'], entry: '(R)' },
		{ id: 1, character: 'ㄲ', sounds: ['kk'], entry: '(shift+R)' },
		{ id: 2, character: 'ㄴ', sounds: ['n'], entry: '(S)' },	
		{ id: 3, character: 'ㄷ', sounds: ['d', 't'], entry: '(E)' },	
		{ id: 4, character: 'ㄸ', sounds: ['tt'], entry: '(shift+E)' },	
		{ id: 5, character: 'ㄹ', sounds: ['l', 'r'], entry: '(F)' },	
		{ id: 6, character: 'ㅁ', sounds: ['m'], entry: '(A)' },	
		{ id: 7, character: 'ㅂ', sounds: ['b', 'p'], entry: '(Q)' },	
		{ id: 8, character: 'ㅃ', sounds: ['pp'], entry: '(shift+Q)' },	
		{ id: 9, character: 'ㅅ', sounds: ['s'], entry: '(T)' },	
		{ id: 10, character: 'ㅆ', sounds: ['ss'], entry: '(shift+T)' },	
		{ id: 11, character: 'ㅇ', sounds: ['ng'], entry: '(D)' },	
		{ id: 12, character: 'ㅈ', sounds: ['j',' ch'], entry: '(W)' },	
		{ id: 13, character: 'ㅉ', sounds: ['jj', 'tch'], entry: '(shift+W)' },	
		{ id: 14, character: 'ㅊ', sounds: ['ch'], entry: '(C)' },	
		{ id: 15, character: 'ㅋ', sounds: ['k'], entry: '(Z)' },	
		{ id: 16, character: 'ㅌ', sounds: ['t'], entry: '(X)' },	
		{ id: 17, character: 'ㅍ', sounds: ['p'], entry: '(V)' },	
		{ id: 17, character: 'ㅎ', sounds: ['h'], entry: '(G)' },	
	],
	[VOWELS]: [
		{ id: 18, character: 'ㅏ', sounds: ['a'], entry: '(K)' },
		{ id: 19, character: 'ㅒ', sounds: ['ae'], entry: '(O)' },
		{ id: 20, character: 'ㅑ', sounds: ['l'], entry: '(l)' },	
		{ id: 21, character: 'ㅒ', sounds: ['yae'], entry: '(shift+O)' },	
		{ id: 22, character: 'ㅓ', sounds: ['eo'], entry: '(J)' },	
		{ id: 23, character: 'ㅖ', sounds: ['ye'], entry: '(P)' },	
		{ id: 24, character: 'ㅕ', sounds: ['yeo'], entry: '(U)' },	
		{ id: 25, character: 'ㅖ', sounds: ['ye'], entry: '(shift+P)' },	
		{ id: 26, character: 'ㅗ', sounds: ['o'], entry: '(H)' },	
		{ id: 27, character: 'ㅘ', sounds: ['wa'], entry: '(H+K)' },	
		{ id: 28, character: 'ㅙ', sounds: ['wae'], entry: '(H+O)' },	
		{ id: 29, character: 'ㅚ', sounds: ['oe'], entry: '(H+L)' },	
		{ id: 30, character: 'ㅛ', sounds: ['yo'], entry: '(Y)' },	
		{ id: 32, character: 'ㅜ', sounds: ['u'], entry: '(N)' },	
		{ id: 33, character: 'ㅝ', sounds: ['wo'], entry: '(N+J)' },	
		{ id: 34, character: 'ㅞ', sounds: ['we'], entry: '(N+P)' },	
		{ id: 34, character: 'ㅟ', sounds: ['wi'], entry: '(N+L)' },	
		{ id: 35, character: 'ㅠ', sounds: ['yu'], entry: '(B)' },	
		{ id: 36, character: 'ㅡ', sounds: ['eu'], entry: '(M)' },	
		{ id: 37, character: 'ㅢ', sounds: ['ui'], entry: '(M+L)' },	
		{ id: 38, character: 'ㅣ', sounds: ['i'], entry: '(L)' },	
	]
}

console.log(sets)
