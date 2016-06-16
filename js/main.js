/**
 * Created by Rick Stewart on 6/16/2016.
 */


(function main() {
    'use strict';

    /******************************************** Model *************************************************/
    var model = {
        cats: [
            {catName: 'Bosco', image: 'images/cat5.jpg', num: 0},
            {catName: 'Ulysses', image: 'images/cat1.jpg', num: 0},
            {catName: 'Dickens', image: 'images/cat2.jpg', num: 0},
            {catName: 'Digger', image: 'images/cat3.jpg', num: 0},
            {catName: 'Baxter', image: 'images/cat4.jpg', num: 0},
            {catName: 'Kipling', image: 'images/cat0.jpg', num: 0},
            {catName: 'Trapper', image: 'images/cat6.jpg', num: 0},
            {catName: 'Gulliver', image: 'images/cat7.jpg', num: 0},
            {catName: 'Chaucer', image: 'images/cat8.jpg', num: 0},
            {catName: 'Churchill', image: 'images/cat9.jpg', num: 0}
        ],
        index: '0'                                            // holds index of currently displayed cat.
    };

    /******************************************** Controller *********************************************/
    var controller = {
        init: function () {
            controller.catalog();
            model.index = Math.floor(Math.random() * model.cats.length);
            controller.refresh();
            $('#close').trigger('click');
        },

        listener_1: $('#sidebar-left').mouseover(function (e) {
            var pattern = /HTMLParagraphElement/;
            if (pattern.test(e.target)) {
                e.target.style.color = 'yellow';
            }
        }),

        listener_2: $('#sidebar-left').mouseout(function (e) {
            var pattern = /HTMLParagraphElement/;
            if (pattern.test(e.target)) {
                e.target.style.color = '#4F636F';
            }
        }),

        listener_3: $('#sidebar-left').click(function (e) {
            var pattern = /HTMLParagraphElement/;
            var indexPattern = /\d+/;
            if (pattern.test(e.target)) {
                model.index = e.toElement.id.match(indexPattern);
                controller.refresh();
            }
        }),

        listener_4: $('#content-right').on('click', 'img', function () {
            model.cats[model.index].num++;
            controller.refresh();
        }),

        listener_5: $('#udacity-link').mouseover(function () {
            this.style.color = 'yellow';
        }),

        listener_6: $('#udacity-link').mouseout(function () {
            this.style.color = '#795151';
        }),

        listener_7: $('#udacity-link').click(function () {
            window.open('https://www.udacity.com/course/javascript-design-patterns--ud989');
        }),

        listener_8: $('#admin-button').mouseover(function () {
            this.style.color = '#000';
        }),

        listener_9: $('#admin-button').mouseout(function () {
            this.style.color = '#795151';
        }),

        listener_10: $('#admin-button').click(function () {
            $('.span').show();
            $('#close').show();
        }),

        listener_11: $('#close').mouseover(function () {
            this.style.background = '#fff';
        }),

        listener_12: $('#close').mouseout(function () {
            this.style.background = '#BC8F8F';
        }),

        listener_13: $('#close').click(function () {
            $('.span').hide();
            $('#close').hide();
        }),

        listener_14: $('#save').mouseover(function () {
            this.style.color = '#000';
        }),

        listener_15: $('#save').mouseout(function () {
            this.style.color = '#795151';
        }),

        listener_16: $('#save').click(function () {
            model.cats[model.index].catName = $('#name-input').val();
            model.cats[model.index].image = $('#image-input').val();
            model.cats[model.index].num = $('#count-input').val();
            controller.refresh();
            controller.catalog();
        }),

        refresh: function () {
            $('#content-right span').remove();
            $('#content-right img').remove();
            $('#name-input').val(model.cats[model.index].catName);
            $('#image-input').val(model.cats[model.index].image);
            $('#count-input').val(model.cats[model.index].num);
            view.insertName(model.cats[model.index].catName);
            view.insertImage(model.cats[model.index].image);
            view.insertCount(model.cats[model.index].num);
        },

        catalog: function () {
            $('p').remove('.cat-names');
            for (var i = 0; i < model.cats.length; i++) {
                view.insertCatalogItem(i, model.cats[i].catName);
            }
        }
    };

    /******************************************** View *************************************************/
    var view = {
        insertCatalogItem: function (num, item) {
            var text = '<p id="image' + num + '" class="cat-names">' + 'Meet ' + item + '</p>';
            $('#sidebar-left').append(text);
        },

        insertImage: function (catImage) {
            var image = '<img class="images" src="' + catImage + '">';
            $('#kitty-image').append(image);
        },

        insertName: function (catName) {
            var name = '<span class="names">' + 'Hello ' + catName + '!</span>';
            $('#kitty-name').append(name);
        },

        insertCount: function (catNum) {
            var number = '<span class="nums">' + 'Your Image has been clicked ' + catNum + ' times.</span>';
            $('#kitty-name').append(number);
        }
    };

    controller.init();
})();
