//=============================================================================
// YME_NonFadeBGMforTitle.js
//=============================================================================

/*:ja
 * @plugindesc タイトル画面からニューゲームを選んだ際に、
 * タイトル曲をフェードアウトさせずにマップシーンへ進みます。
 * @author 弓猫
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * 当プラグインはパブリックドメインです。
 * 一切の制限なく自由に使えますが、弓猫は一切の責任を負わないものとします。
 */

(function() {
    Scene_Title.prototype.commandNewGame = function() {
        DataManager.setupNewGame();
        this._commandWindow.close();
        //this.fadeOutAll();
        var time = this.slowFadeSpeed() / 60;
        this.startFadeOut(this.slowFadeSpeed());
        SceneManager.goto(Scene_Map);
    };
})();