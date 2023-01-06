const { Extension, type, api } = require('clipcc-extension');

let DictionaryList = new Array();

class OCXQDictionary extends Extension {
    onInit() {
        api.addCategory({
            categoryId: 'ordchaosxq.dictionary.category',
            messageId: 'ordchaosxq.dictionary.category.message',
            color: '#2468AC'
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.new',
            type: type.BlockType.COMMAND,
            messageId: 'ordchaosxq.dictionary.new.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                }
            },
            function: args => this.newDictionary(args.NAME)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.delate',
            type: type.BlockType.COMMAND,
            messageId: 'ordchaosxq.dictionary.delate.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                }
            },
            function: args => this.delateDictionary(args.NAME)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.addvalue',
            type: type.BlockType.COMMAND,
            messageId: 'ordchaosxq.dictionary.addvalue.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                },
                KEY: {
                    type: type.ParameterType.STRING,
                    default: 'Key'
                },
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'Value'
                }
            },
            function: args => this.addValue(args.NAME, args.KEY, args.VALUE)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.delatevalue',
            type: type.BlockType.COMMAND,
            messageId: 'ordchaosxq.dictionary.delatevalue.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                },
                KEY: {
                    type: type.ParameterType.STRING,
                    default: 'Key'
                }
            },
            function: args => this.delateValue(args.NAME, args.KEY)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.erasedictionary',
            type: type.BlockType.COMMAND,
            messageId: 'ordchaosxq.dictionary.erasedictionary.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                }
            },
            function: args => this.eraseDictionary(args.NAME)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.delatealldictionary',
            type: type.BlockType.COMMAND,
            messageId: 'ordchaosxq.dictionary.delatealldictionary.message',
            categoryId: 'ordchaosxq.dictionary.category',
            function: () => this.delateAllDictionary()
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.getvalue',
            type: type.BlockType.REPORTER,
            messageId: 'ordchaosxq.dictionary.getvalue.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                },
                KEY: {
                    type: type.ParameterType.STRING,
                    default: 'Key'
                }
            },
            function: args => this.getValue(args.NAME, args.KEY)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.getnumber',
            type: type.BlockType.REPORTER,
            messageId: 'ordchaosxq.dictionary.getnumber.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                }
            },
            function: args => this.getNumber(args.NAME)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.getnumbervalue',
            type: type.BlockType.REPORTER,
            messageId: 'ordchaosxq.dictionary.getnumbervalue.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                },
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'Value'
                }
            },
            function: args => this.getNumber(args.NAME)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.getnumberofalldictionary',
            type: type.BlockType.REPORTER,
            messageId: 'ordchaosxq.dictionary.getnumberofalldictionary.message',
            categoryId: 'ordchaosxq.dictionary.category',
            function: () => this.getNumberOfAllDictionary()
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.isdictionaryexists',
            type: type.BlockType.BOOLEAN,
            messageId: 'ordchaosxq.dictionary.isdictionaryexists.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                }
            },
            function: args => this.isDictionaryExists(args.NAME)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.iskeyexists',
            type: type.BlockType.BOOLEAN,
            messageId: 'ordchaosxq.dictionary.iskeyexists.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                },
                KEY: {
                    type: type.ParameterType.STRING,
                    default: 'Key'
                }
            },
            function: args => this.isKeyExists(args.NAME, args.KEY)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.isvalueexists',
            type: type.BlockType.BOOLEAN,
            messageId: 'ordchaosxq.dictionary.isvalueexists.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                },
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'Value'
                }
            },
            function: args => this.isValueExists(args.NAME, args.VALUE)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.isdictionaryempty',
            type: type.BlockType.BOOLEAN,
            messageId: 'ordchaosxq.dictionary.isdictionaryempty.message',
            categoryId: 'ordchaosxq.dictionary.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Dictionary'
                }
            },
            function: args => this.isDictionaryEmpty(args.NAME)
        });
        api.addBlock({
            opcode: 'ordchaosxq.dictionary.isanydictionaryexists',
            type: type.BlockType.BOOLEAN,
            messageId: 'ordchaosxq.dictionary.isanydictionaryexists.message',
            categoryId: 'ordchaosxq.dictionary.category',
            function: () => this.isAnyDictionaryExists()
        });
    }

    onUninit() {
        api.removeCategory('ordchaosxq.dictionary.category');
        DictionaryList = undefined;
    }

    newDictionary(NAME) {
        if(!this.isDictionaryExists(NAME)) {
            DictionaryList[NAME] = new Array();
        }
    }

    delateDictionary(NAME) {
        if(this.isDictionaryExists(NAME)) {
            delete DictionaryList[NAME];
        }
    }

    addValue(NAME, KEY, VALUE) {
        if(this.isDictionaryExists(NAME)) {
            DictionaryList[NAME][KEY] = VALUE;
        }
    }

    delateValue(NAME, KEY) {
        if(this.isDictionaryExists(NAME)) {
            delete DictionaryList[NAME][KEY];
        }
    }

    eraseDictionary(NAME) {
        if (this.isDictionaryExists(NAME)) {
            DictionaryList[NAME] = new Array();
        }
    }

    delateAllDictionary() {
        DictionaryList = new Array();
    }

    getValue(NAME, KEY) {
        if(this.isKeyExists(NAME, KEY)) {
            return DictionaryList[NAME][KEY];
        }
        return 'undefined';
    }

    getNumber(NAME) {
        if(this.isDictionaryExists(NAME)) {
            var n = 0;
            for(var keys in DictionaryList[NAME]) {
                n++;
            }
            return n;
        }
        return 'undefined';
    }

    getNumberValue(NAME, VALUE) {
        if(this.isDictionaryExists(NAME)) {
            var n = 0;
            for(var keys in DictionaryList[NAME]) {
                if(DictionaryList[NAME][keys] == VALUE) {
                    n++;
                }
            }
            return n;
        }
        return 'undefined';
    }

    getNumberOfAllDictionary() {
        var n = 0;
        for(var keys in DictionaryList) {
            n++;
        }
        return n;
    }

    isDictionaryExists(NAME) {
        return DictionaryList[NAME] != undefined;
    }

    isKeyExists(NAME, KEY) {
        if(this.isDictionaryExists(NAME)) {
            return DictionaryList[NAME][KEY] != undefined;
        }
        return 'undefined';
    }

    isValueExists(NAME, VALUE) {
        if(this.isDictionaryExists(NAME)) {
            return this.getNumberValue(NAME, VALUE) > 0;
        }
        return 'undefined';
    }

    isDictionaryEmpty(NAME) {
        if(this.isDictionaryExists(NAME)) {
            return this.getNumber(NAME) == 0;
        }
        return 'undefined';
    }

    isAnyDictionaryExists() {
        return this.getNumberOfAllDictionary() > 0;
    }
}

module.exports = OCXQDictionary;
