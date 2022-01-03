
'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
class Game {
  	/**
	 * 引数
	 * width : ゲームの横幅
	 * height : ゲームの縦幅
	 */
	constructor( width, height ) {
		//canvas要素を作成
		this.canvas = document.createElement( 'canvas' );
		//作成したcanvas要素をbodyタグに追加
		document.body.appendChild( this.canvas );
		//canvasの横幅（ゲームの横幅）を設定。もし横幅が指定されていなければ320を代入
		this.canvas.width = width || 320;
		//canvasの縦幅（ゲームの縦幅）を設定。もし縦幅が指定されていなければ320を代入
		this.canvas.height = height || 320;
	} //constructor() 終了
}
