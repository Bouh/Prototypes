/*
 *  GDevelop JS Platform
 *  2013 Florian Rival (Florian.Rival@gmail.com)
 */

/**
 * The TextEntryRuntimeObject allows to capture text typed on the keyboard.
 *
 * @class TextEntryRuntimeObject
 * @extends RuntimeObject
 * @namespace gdjs
 */
gdjs.TextEntryRuntimeObject = function(runtimeScene, objectData)
{
    gdjs.RuntimeObject.call(this, runtimeScene, objectData);
    this._str = "";
    this._activated = true;

    if (this._renderer)
        gdjs.TextEntryRuntimeObjectRenderer.call(this._renderer, this, runtimeScene);
    else
        this._renderer = new gdjs.TextEntryRuntimeObjectRenderer(this, runtimeScene);
};

gdjs.TextEntryRuntimeObject.prototype = Object.create( gdjs.RuntimeObject.prototype );
gdjs.TextEntryRuntimeObject.thisIsARuntimeObjectConstructor = "TextEntryObject::TextEntry";

gdjs.TextEntryRuntimeObject.prototype.onDeletedFromScene = function(runtimeScene) {
    gdjs.RuntimeObject.prototype.onDeletedFromScene.call(this, runtimeScene);

    if (this._renderer.ownerRemovedFromScene) {
        this._renderer.ownerRemovedFromScene();
    }
};

gdjs.TextEntryRuntimeObject.prototype.updateTime = function(elapsedTime) {
    if (this._renderer.getString) {
        this._str = this._renderer.getString();
    }
};

gdjs.TextEntryRuntimeObject.prototype.getString = function() {
    return this._str;
};

gdjs.TextEntryRuntimeObject.prototype.setString = function(str) {
    this._str = str;
    this._renderer.updateString();
};

gdjs.TextEntryRuntimeObject.prototype.isActivated = function() {
    return this._activated;
};

gdjs.TextEntryRuntimeObject.prototype.activate = function(enable) {
    this._activated = enable;
    this._renderer.activate(this._activated);
};
