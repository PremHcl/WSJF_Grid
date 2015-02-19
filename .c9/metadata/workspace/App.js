{"filter":false,"title":"App.js","tooltip":"/App.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":99,"column":52},"end":{"row":99,"column":53},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":53},"end":{"row":99,"column":54},"action":"insert","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":54},"end":{"row":99,"column":55},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":55},"end":{"row":99,"column":56},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":56},"end":{"row":99,"column":57},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":57},"end":{"row":99,"column":58},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":58},"end":{"row":99,"column":59},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":59},"end":{"row":99,"column":61},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":210,"column":5},"end":{"row":210,"column":6},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":210,"column":6},"end":{"row":211,"column":0},"action":"insert","lines":["",""]},{"start":{"row":211,"column":0},"end":{"row":211,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":211,"column":4},"end":{"row":215,"column":6},"action":"insert","lines":["    _getReleaseFilter: function() {","        var combo = this.down('rallyreleasecombobox');","        return combo.getValue() ?","          [combo.getQueryFromSelected()] : [];","    },"]}]}],[{"group":"doc","deltas":[{"start":{"row":215,"column":5},"end":{"row":215,"column":6},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":73,"column":12},"end":{"row":73,"column":27},"action":"remove","lines":["var query = [];"]}]}],[{"group":"doc","deltas":[{"start":{"row":73,"column":8},"end":{"row":73,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":73,"column":4},"end":{"row":73,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":73,"column":0},"end":{"row":73,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":59},"end":{"row":73,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":16},"end":{"row":86,"column":17},"action":"remove","lines":["var selectedRelease = this.releaseCombobox.getRecord();","                if( selectedRelease ) {","                    if( selectedRelease.data.Name != \"No Filter\" ) {","                        console.log(\"selected release: \", selectedRelease.data.Name);","                        query = this.releaseCombobox.getQueryFromSelected();","                    } ","                } else { // catch \"Unscheduled\"","                    query = this.releaseCombobox.getQueryFromSelected();","                }"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":0},"end":{"row":77,"column":68},"action":"remove","lines":["                console.log(\"ModelFactory: getting release filter\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":46},"end":{"row":77,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":13},"end":{"row":77,"column":14},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":12},"end":{"row":77,"column":13},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":8},"end":{"row":77,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":4},"end":{"row":77,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":0},"end":{"row":77,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":46},"end":{"row":77,"column":2},"action":"remove","lines":["","  "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":0},"end":{"row":40,"column":13},"action":"remove","lines":["        //this._onPICombobox(); // for some reason have to refresh the model to get it to work","       var releaseFilter = this.releaseCombobox.getQueryFromSelected();","        var selectedRelease = this.releaseCombobox.getRecord();","        if( selectedRelease ) {","            if( selectedRelease.data.Name == \"No Filter\" ) {","                releaseFilter = [];","            }"]},{"start":{"row":34,"column":0},"end":{"row":41,"column":9},"action":"insert","lines":[" var grid = this.down('rallygrid'),","            store = grid.getStore(),","            filter = this._getReleaseFilter();","","        store.clearFilter(filter.length > 0);","        if(filter.length) {","          store.filter(this._getReleaseFilter());","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":1},"end":{"row":34,"column":4},"action":"insert","lines":["   "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":4},"end":{"row":34,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":13},"action":"remove","lines":["  }"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":43,"column":1},"action":"remove","lines":[""," "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":43,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":8},"end":{"row":41,"column":9},"action":"remove","lines":["var grid = this.down('rallygrid'),","        store = grid.getStore(),","        filter = this._getReleaseFilter();","","        store.clearFilter(filter.length > 0);","        if(filter.length) {","          store.filter(this._getReleaseFilter());","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":16},"end":{"row":45,"column":17},"action":"remove","lines":["if(this._myGrid ) {","                    var store = this._myGrid.getStore();","                    store.clearFilter(!0);","                    store.filter(releaseFilter);","                }"]},{"start":{"row":41,"column":16},"end":{"row":48,"column":9},"action":"insert","lines":["var grid = this.down('rallygrid'),","        store = grid.getStore(),","        filter = this._getReleaseFilter();","","        store.clearFilter(filter.length > 0);","        if(filter.length) {","          store.filter(this._getReleaseFilter());","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"insert","lines":["    "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"insert","lines":["    "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"insert","lines":["    "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"insert","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["    "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"insert","lines":["    "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"insert","lines":["    "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"insert","lines":["    "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"insert","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["    "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":4},"end":{"row":34,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":35},"end":{"row":34,"column":2},"action":"remove","lines":["","  "]}]}],[{"group":"doc","deltas":[{"start":{"row":152,"column":0},"end":{"row":152,"column":39},"action":"remove","lines":["        //console.log(\"Creating Grid\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":151,"column":36},"end":{"row":152,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":60},"end":{"row":105,"column":65},"action":"remove","lines":["query"]},{"start":{"row":105,"column":60},"end":{"row":105,"column":84},"action":"insert","lines":["this._getReleaseFilter()"]}]}],[{"group":"doc","deltas":[{"start":{"row":193,"column":0},"end":{"row":193,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":192,"column":6},"end":{"row":193,"column":0},"action":"insert","lines":["",""]},{"start":{"row":193,"column":0},"end":{"row":193,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":42},"end":{"row":104,"column":0},"action":"insert","lines":["",""]},{"start":{"row":104,"column":0},"end":{"row":104,"column":24},"action":"insert","lines":["                        "]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":24},"end":{"row":114,"column":13},"action":"insert","lines":[" if (this.piCombobox.getRecord().get('Ordinal') === 0)","            {","                var grid = this.down('rallygrid'),","                store = grid.getStore(),","                filter = this._getReleaseFilter();","        ","                store.clearFilter(filter.length > 0);","                if(filter.length) {","                  store.filter(this._getReleaseFilter());","                }","            }"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":0},"end":{"row":105,"column":4},"action":"insert","lines":["    "]},{"start":{"row":106,"column":0},"end":{"row":106,"column":4},"action":"insert","lines":["    "]},{"start":{"row":107,"column":0},"end":{"row":107,"column":4},"action":"insert","lines":["    "]},{"start":{"row":108,"column":0},"end":{"row":108,"column":4},"action":"insert","lines":["    "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":4},"action":"insert","lines":["    "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":4},"action":"insert","lines":["    "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":4},"action":"insert","lines":["    "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":4},"action":"insert","lines":["    "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":4},"action":"insert","lines":["    "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":0},"end":{"row":105,"column":4},"action":"insert","lines":["    "]},{"start":{"row":106,"column":0},"end":{"row":106,"column":4},"action":"insert","lines":["    "]},{"start":{"row":107,"column":0},"end":{"row":107,"column":4},"action":"insert","lines":["    "]},{"start":{"row":108,"column":0},"end":{"row":108,"column":4},"action":"insert","lines":["    "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":4},"action":"insert","lines":["    "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":4},"action":"insert","lines":["    "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":4},"action":"insert","lines":["    "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":4},"action":"insert","lines":["    "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":4},"action":"insert","lines":["    "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":0},"end":{"row":105,"column":4},"action":"insert","lines":["    "]},{"start":{"row":106,"column":0},"end":{"row":106,"column":4},"action":"insert","lines":["    "]},{"start":{"row":107,"column":0},"end":{"row":107,"column":4},"action":"insert","lines":["    "]},{"start":{"row":108,"column":0},"end":{"row":108,"column":4},"action":"insert","lines":["    "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":4},"action":"insert","lines":["    "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":4},"action":"insert","lines":["    "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":4},"action":"insert","lines":["    "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":4},"action":"insert","lines":["    "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":4},"action":"insert","lines":["    "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":20},"end":{"row":105,"column":24},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":16},"end":{"row":105,"column":20},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":12},"end":{"row":105,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":8},"end":{"row":105,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":4},"end":{"row":105,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":0},"end":{"row":105,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":78},"end":{"row":105,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":78},"end":{"row":104,"column":79},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":42},"end":{"row":104,"column":0},"action":"insert","lines":["",""]},{"start":{"row":104,"column":0},"end":{"row":104,"column":24},"action":"insert","lines":["                        "]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":24},"end":{"row":104,"column":60},"action":"insert","lines":["var store = this._myGrid.getStore();"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":27},"end":{"row":107,"column":52},"action":"remove","lines":[" store = grid.getStore(),"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":26},"end":{"row":107,"column":27},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":25},"end":{"row":107,"column":26},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":24},"end":{"row":107,"column":25},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":20},"end":{"row":107,"column":24},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":16},"end":{"row":107,"column":20},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":12},"end":{"row":107,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":8},"end":{"row":107,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":4},"end":{"row":107,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":0},"end":{"row":107,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":62},"end":{"row":107,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":113,"column":25},"end":{"row":115,"column":86},"action":"remove","lines":["","                        var store = this._myGrid.getStore();","                        store.clearFilter(!0), store.filter(this._getReleaseFilter());"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":28},"end":{"row":106,"column":62},"action":"remove","lines":["var grid = this.down('rallygrid'),"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":24},"end":{"row":106,"column":28},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":20},"end":{"row":106,"column":24},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":16},"end":{"row":106,"column":20},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":12},"end":{"row":106,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":8},"end":{"row":106,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":4},"end":{"row":106,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":0},"end":{"row":106,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":80},"end":{"row":106,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":28},"end":{"row":106,"column":29},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":29},"end":{"row":106,"column":30},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":30},"end":{"row":106,"column":31},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":31},"end":{"row":106,"column":32},"action":"insert","lines":[" "]}]}]]},"ace":{"folds":[{"start":{"row":52,"column":32},"end":{"row":62,"column":4},"placeholder":"..."},{"start":{"row":129,"column":40},"end":{"row":156,"column":4},"placeholder":"..."}],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":110,"column":17},"end":{"row":110,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1424351915713,"hash":"2e873c5c55f3b6ec6baec388e1d6ab425bdc9961"}