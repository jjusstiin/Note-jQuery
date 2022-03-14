$(function () {

    // 10. 練習設定初始值
    btnSet.onclick = function () {

        // 20. 將地址設為預設
        // $('#address').prop('value', 'Taichung');
        // $('#address').val('Miaoli');
        $('select option[value="Hsinchu"]').prop('selected',true);

        // 30. 將職業預設為其他
        $('input[name="job"][value="other"]').prop('checked', true);

        // 40. 將交通工具預設為機車
        $('input[name="vehicle"][value="other"]').prop('checked', true);
    }
})

