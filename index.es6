class objectHelper {

  constructor(object) {
    this.object = object;
  }

  get(path, defaultValue) {
    return objectHelper.GET(this.object, path, defaultValue);
  }

  set(path, value) {
    return objectHelper.SET(this.object, path, value);
  }

  static GET(object, path, defaultValue) {
    var list = path.split('.');
    var next = list.shift();

    if (object[next]) {
      return (list.length === 0) ?
        object[next] :
        objectHelper.GET(object[next], list.join('.'), defaultValue);
    }
    return defaultValue;
  }

  static SET(object, path, value) {
    var list = path.split('.');
    var next = list.shift();

    if (list.length === 0) {
      object[next] = value;
      return object;
    }

    if (!object[next]) {
      object[next] = {};
    }

    return objectHelper.SET(object[next], list.join('.'), value);
  }
}

export default objectHelper;
