$(function(){
    
    // 真偽ボタンを押したときのフラグ 1=1回目 2=2回目
    flag1 = null;
    flag2 = null;

    // 真偽ボタン
    $("#1-true").on("pointerdown", function(){
        flag1 = true;
        effectCalc();
    });
    $("#1-false").on("pointerdown", function(){
        flag1 = false;
        effectCalc();
    });
    $("#2-true").on("pointerdown", function(){
        flag2 = true;
        effectCalc();
    });
    $("#2-false").on("pointerdown", function(){
        flag2 = false;
        effectCalc();
    });

    // 水雷ボタンを押したときのフラグ w=water l=lightning
    flag1wl = null;
    flag2wl = null;

    $("#1_water").on("pointerdown", function(){
        flag1wl = "w";
        effectCalc();
    });
    $("#1_lightning").on("pointerdown", function(){
        flag1wl = "l";
        effectCalc();
    });
    $("#2_water").on("pointerdown", function(){
        flag2wl = "w";
        effectCalc();
    });
    $("#2_lightning").on("pointerdown", function(){
        flag2wl = "l";
        effectCalc();
    });

    // 加速度ボタンを押したときのフラグ b=bomb
    flag1b = null;
    flag2b = null;
    $("#1_bomb").on("pointerdown", function(){
        if(flag1b){
            flag1b = null;
        }else{ // 加速度2度押し解除
            flag1b = true;
        }
        effectCalc();
    });
    $("#2_bomb").on("pointerdown", function(){
        if(flag2b){
            flag2b = null;
        }else{ // 加速度2度押し解除
            flag2b = true;
        }
        effectCalc();
    });

    // つなみ・ほのおの真偽ボタンを押した時のフラグ
    flagTsunami = null;
    flagFire = null;
    
    $("#tsunami-true-button").on("pointerdown", function(){
        flagTsunami = true;
        effectCalc();
    });
    $("#tsunami-false-button").on("pointerdown", function(){
        flagTsunami = false;
        effectCalc();
    });
    $("#fire-true-button").on("pointerdown", function(){
        flagFire = true;
        effectCalc();
    });
    $("#fire-false-button").on("pointerdown", function(){
        flagFire = false;
        effectCalc();
    });

    // 表示変更メソッド
    function effectCalc(){
        // 1回目
        // 真偽フラグが触れられていない場合はスルー
        if(flag1 !== null){
            if(flag1){ // 真の場合
                $("#1_sight_true").removeClass("disabled");
                $("#1_sight_false").addClass("disabled");
                if(flag1wl === "w"){ // 真・水の場合
                    $("#1_water_true").removeClass("disabled");
                    $("#1_water_false").addClass("disabled");
                    $("#1_lightning_true").addClass("disabled");
                    $("#1_lightning_false").addClass("disabled");
                }else if(flag1wl === "l"){ // 真・雷の場合
                    $("#1_water_true").addClass("disabled");
                    $("#1_water_false").addClass("disabled");
                    $("#1_lightning_true").removeClass("disabled");
                    $("#1_lightning_false").addClass("disabled");
                }
                if(flag1b === true){ // 真・加速度の場合
                    $("#1_bomb_true").removeClass("disabled");
                    $("#1_bomb_false").addClass("disabled");
                }else{ // 加速度解除の場合
                    $("#1_bomb_true").addClass("disabled");
                    $("#1_bomb_false").addClass("disabled");
                }
            }else if(!flag1){ // 偽の場合
                $("#1_sight_true").addClass("disabled");
                $("#1_sight_false").removeClass("disabled");
                if(flag1wl === "w"){ // 偽・水の場合
                    $("#1_water_true").addClass("disabled");
                    $("#1_water_false").removeClass("disabled");
                    $("#1_lightning_true").addClass("disabled");
                    $("#1_lightning_false").addClass("disabled");
                }else if(flag1wl === "l"){ // 偽・雷の場合
                    $("#1_water_true").addClass("disabled");
                    $("#1_water_false").addClass("disabled");
                    $("#1_lightning_true").addClass("disabled");
                    $("#1_lightning_false").removeClass("disabled");
                }
                if(flag1b === true){ // 偽・加速度の場合
                    $("#1_bomb_true").addClass("disabled");
                    $("#1_bomb_false").removeClass("disabled");
                }else{ // 加速度解除の場合
                    $("#1_bomb_true").addClass("disabled");
                    $("#1_bomb_false").addClass("disabled");
                }
            }
        }

        // 2回目
        // 真偽フラグが触れられていない場合はスルー
        if(flag2 !== null){
            if(flag2){ // 真の場合
                $("#2_sight_true").removeClass("disabled");
                $("#2_sight_false").addClass("disabled");
                if(flag2wl === "w"){ // 真・水の場合
                    $("#2_water_true").removeClass("disabled");
                    $("#2_water_false").addClass("disabled");
                    $("#2_lightning_true").addClass("disabled");
                    $("#2_lightning_false").addClass("disabled");
                }else if(flag2wl === "l"){ // 真・雷の場合
                    $("#2_water_true").addClass("disabled");
                    $("#2_water_false").addClass("disabled");
                    $("#2_lightning_true").removeClass("disabled");
                    $("#2_lightning_false").addClass("disabled");
                }
                if(flag2b === true){ // 真・加速度の場合
                    $("#2_bomb_true").removeClass("disabled");
                    $("#2_bomb_false").addClass("disabled");
                }else{ // 加速度解除の場合
                    $("#2_bomb_true").addClass("disabled");
                    $("#2_bomb_false").addClass("disabled");
                }
            }else if(!flag2){ // 偽の場合
                $("#2_sight_true").addClass("disabled");
                $("#2_sight_false").removeClass("disabled");
                if(flag2wl === "w"){ // 偽・水の場合
                    $("#2_water_true").addClass("disabled");
                    $("#2_water_false").removeClass("disabled");
                    $("#2_lightning_true").addClass("disabled");
                    $("#2_lightning_false").addClass("disabled");
                }else if(flag2wl === "l"){ // 偽・雷の場合
                    $("#2_water_true").addClass("disabled");
                    $("#2_water_false").addClass("disabled");
                    $("#2_lightning_true").addClass("disabled");
                    $("#2_lightning_false").removeClass("disabled");
                }
                if(flag2b === true){ // 偽・加速度の場合
                    $("#2_bomb_true").addClass("disabled");
                    $("#2_bomb_false").removeClass("disabled");
                }else{ // 加速度解除の場合
                    $("#2_bomb_true").addClass("disabled");
                    $("#2_bomb_false").addClass("disabled");
                }
            }
        }
        
        if(flagTsunami !== null){
            if(flagTsunami){
                $("#tsunami_true").removeClass("disabled");
                $("#tsunami_false").addClass("disabled");
            }else if (!flagTsunami){
                $("#tsunami_true").addClass("disabled");
                $("#tsunami_false").removeClass("disabled");
            }
        }

        if(flagFire !== null){
            if(flagFire){
                $("#fire_true").removeClass("disabled");
                $("#fire_false").addClass("disabled");
            }else if (!flagFire){
                $("#fire_true").addClass("disabled");
                $("#fire_false").removeClass("disabled");
            }
        }
    }

});