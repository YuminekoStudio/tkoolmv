//=============================================================================
// YME_LevelUpSe.js
//=============================================================================

/*:ja
 * @plugindesc レベルアップ時に効果音を再生します。
 * @author 弓猫
 *
 * @param SE Name
 * @desc 効果音のファイル名を指定します。
 * @default Up4
 *
 * @param SE Volume
 * @desc 効果音のボリュームを指定します。0～100
 * @default 100
 *
 * @param SE Picth
 * @desc 効果音のピッチ（速さ）を指定します。50～150
 * @default 100
 *
 * @help
 *
 * レベルアップ文章を表示した時のみ、効果音が再生されます（戦闘も対象です）。
 *
 * 当プラグインの規約はMITライセンスです（分からない方は調べておくことをおすすめします）。
 * http://opensource.org/licenses/mit-license.php
 * 
 */


(function() {
    var parameters = PluginManager.parameters('YME_LevelUpSe');
    var seName = String(parameters['SE Name'] || 'Up4');
    var seVolume = Number(parameters['SE Volume'] || 100);
    var sePitch = Number(parameters['SE Picth'] || 100);


    //var displayLevelUp = Game_Actor.prototype.displayLevelUp;
    var upSE = {"name":seName,"pan":0,"pitch":sePitch,"volume":seVolume}
    Game_Actor.prototype.displayLevelUp = function(newSkills) {
        var text = TextManager.levelUp.format(this._name, TextManager.level, this._level);
        $gameMessage.newPage();
        $gameMessage.add(text);
        newSkills.forEach(function(skill) {
            $gameMessage.add(TextManager.obtainSkill.format(skill.name));
        });
        
        AudioManager.playStaticSe(upSE);
        //displayLevelUp.call(this(newSkills);
    };
    
    
})();