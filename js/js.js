$(function(){
    
    // 真偽ボタンを押したときのフラグ 1=1回目 2=2回目
    flag1 = null;
    flag2 = null;

    // 真偽ボタン
    $("#1-true").on("pointerdown", function(){
        flag1 = true;
        $("#1-true").addClass("active");
        $("#1-false").removeClass("active");
        effectCalc();
    });
    $("#1-false").on("pointerdown", function(){
        flag1 = false;
        $("#1-true").removeClass("active");
        $("#1-false").addClass("active");
        effectCalc();
    });
    $("#2-true").on("pointerdown", function(){
        flag2 = true;
        $("#2-true").addClass("active");
        $("#2-false").removeClass("active");
        effectCalc();
    });
    $("#2-false").on("pointerdown", function(){
        flag2 = false;
        $("#2-true").removeClass("active");
        $("#2-false").addClass("active");
        effectCalc();
    });

    // 水雷ボタンを押したときのフラグ w=water l=lightning
    flag1wl = null;
    flag2wl = null;

    $("#1_water").on("pointerdown", function(){
        if(flag2wl === null){
            if(flag1wl === "w"){
                flag1wl = null;
                $("#1_water").removeClass("active");
                $("#1_lightning").removeClass("active");
                $("#2_water").removeClass("inactive");
                $("#2_lightning").removeClass("inactive");
            }else{
                flag1wl = "w";
                $("#1_water").addClass("active");
                $("#1_lightning").removeClass("active");
                $("#2_water").addClass("inactive");
                $("#2_lightning").addClass("inactive");
            }
            effectCalc();
        }
    });
    $("#1_lightning").on("pointerdown", function(){
        if(flag2wl === null){
            if(flag1wl === "l"){
                flag1wl = null;
                $("#1_water").removeClass("active");
                $("#1_lightning").removeClass("active");
                $("#2_water").removeClass("inactive");
                $("#2_lightning").removeClass("inactive");
            }else{
                flag1wl = "l";
                $("#1_water").removeClass("active");
                $("#1_lightning").addClass("active");
                $("#2_water").addClass("inactive");
                $("#2_lightning").addClass("inactive");
            }
            effectCalc();
        }
    });
    $("#2_water").on("pointerdown", function(){
        if(flag1wl === null){
            if(flag2wl === "w"){
                flag2wl = null;
                $("#1_water").removeClass("inactive");
                $("#1_lightning").removeClass("inactive");
                $("#2_water").removeClass("active");
                $("#2_lightning").removeClass("active");
            }else{
                flag2wl = "w";
                $("#1_water").addClass("inactive");
                $("#1_lightning").addClass("inactive");
                $("#2_water").addClass("active");
                $("#2_lightning").removeClass("active");
            }
            effectCalc();
        }
    });
    $("#2_lightning").on("pointerdown", function(){
        if(flag1wl === null){
            if(flag2wl === "l"){
                flag2wl = null;
                $("#1_water").removeClass("inactive");
                $("#1_lightning").removeClass("inactive");
                $("#2_water").removeClass("active");
                $("#2_lightning").removeClass("active");
            }else{
                flag2wl = "l";
                $("#1_water").addClass("inactive");
                $("#1_lightning").addClass("inactive");
                $("#2_water").removeClass("active");
                $("#2_lightning").addClass("active");
            }
            effectCalc();
        }
    });

    // 加速度ボタンを押したときのフラグ b=bomb
    flag1b = null;
    flag2b = null;
    $("#1_bomb").on("pointerdown", function(){
        if(!flag2b){
            if(flag1b){ // 加速度2度押し解除
                flag1b = null;
                $("#1_bomb").removeClass("active");
                $("#2_bomb").removeClass("inactive");
            }else{
                flag1b = true;
                $("#1_bomb").addClass("active");
                $("#2_bomb").addClass("inactive");
            }
            effectCalc();
        }
    });
    $("#2_bomb").on("pointerdown", function(){
        if(!flag1b){
            if(flag2b){ // 加速度2度押し解除
                flag2b = null;
                $("#1_bomb").removeClass("inactive");
                $("#2_bomb").removeClass("active");
            }else{
                flag2b = true;
                $("#1_bomb").addClass("inactive");
                $("#2_bomb").addClass("active");
            }
            effectCalc();
        }
    });
    
    // 視線ボタンを押したときのフラグ s=sight
    flag1s = null;
    flag2s = null;
    $("#1_sight").on("pointerdown", function(){
        if(!flag2s){
            if(flag1s){ // 視線2度押し解除
                flag1s = null;
                $("#1_sight").removeClass("active");
                $("#2_sight").removeClass("inactive");
            }else{
                flag1s = true;
                $("#1_sight").addClass("active");
                $("#2_sight").addClass("inactive");
            }
            effectCalc();
        }
    });
    $("#2_sight").on("pointerdown", function(){
        if(!flag1s){
            if(flag2s){ // 視線2度押し解除
                flag2s = null;
                $("#1_sight").removeClass("inactive");
                $("#2_sight").removeClass("active");
            }else{
                flag2s = true;
                $("#1_sight").addClass("inactive");
                $("#2_sight").addClass("active");
            }
            effectCalc();
        }
    });

    // つなみ・ほのおの真偽ボタンを押した時のフラグ
    flagTsunami = null;
    flagFire = null;
    
    $("#tsunami-true-button").on("pointerdown", function(){
        flagTsunami = true;
        $("#tsunami-true-button").addClass("active");
        $("#tsunami-false-button").removeClass("active");
        effectCalc();
    });
    $("#tsunami-false-button").on("pointerdown", function(){
        flagTsunami = false;
        $("#tsunami-true-button").removeClass("active");
        $("#tsunami-false-button").addClass("active");
        effectCalc();
    });
    $("#fire-true-button").on("pointerdown", function(){
        flagFire = true;
        $("#fire-true-button").addClass("active");
        $("#fire-false-button").removeClass("active");
        effectCalc();
    });
    $("#fire-false-button").on("pointerdown", function(){
        flagFire = false;
        $("#fire-true-button").removeClass("active");
        $("#fire-false-button").addClass("active");
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
                }else{
                    $("#1_water_true").addClass("disabled");
                    $("#1_water_false").addClass("disabled");
                    $("#1_lightning_true").addClass("disabled");
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
                }else{
                    $("#1_water_true").addClass("disabled");
                    $("#1_water_false").addClass("disabled");
                    $("#1_lightning_true").addClass("disabled");
                    $("#1_lightning_false").addClass("disabled");
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
                }else{
                    $("#2_water_true").addClass("disabled");
                    $("#2_water_false").addClass("disabled");
                    $("#2_lightning_true").addClass("disabled");
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
                }else{
                    $("#2_water_true").addClass("disabled");
                    $("#2_water_false").addClass("disabled");
                    $("#2_lightning_true").addClass("disabled");
                    $("#2_lightning_false").addClass("disabled");
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
        
        if(flag1s){
            $("#1_sight_true").addClass("bold");
            $("#1_sight_false").addClass("bold");
        }else if(!flag1s){
            $("#1_sight_true").removeClass("bold");
            $("#1_sight_false").removeClass("bold");                
        }
        if(flag2s){
            $("#2_sight_true").addClass("bold");
            $("#2_sight_false").addClass("bold");
        }else if(!flag2s){
            $("#2_sight_true").removeClass("bold");
            $("#2_sight_false").removeClass("bold");                
        }
    }

});