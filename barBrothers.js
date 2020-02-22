glassesExample1 = [1, 1, 2, 3, 3, 3, 2, 2, 1, 1];
glassesExample2 = [1, 1, 2, 1, 2, 2, 1, 1]

function brothersInTheBar(glasses) {
    let rounds = 0;
    let found = 0;
    let last_size = glasses[0];

    for (var i = 1; i < glasses.length; i++) {
        if (glasses[i] == last_size) {
            found++;
            if (found == 2) {
                glasses.splice(i - 2, 3);
                found = 0;
                i - 4 < 0 ? i = 0 : i -= 4;
                last_size = glasses[i];
                rounds++;
            }

            last_size = glasses[i];
        } else {
            found = 0;
            last_size = glasses[i];
        }
    }
    console.log("----------ROUNDS------------> ", rounds);

}

brothersInTheBar(glassesExample1);
brothersInTheBar(glassesExample2);


