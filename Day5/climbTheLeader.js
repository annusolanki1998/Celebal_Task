function climbingLeaderboard(scores, alice) {
    // get the unique ranks sorted descending
    scores = Array.from(new Set(scores));
    console.log(scores);

    const player_ranks = [];
    for (const score of alice) {
        while (scores && score >= scores[scores.length - 1])
            scores.pop()
        player_ranks.push(scores.length + 1)
    }

    return player_ranks
}
let x= climbingLeaderboard([100,90,90,80],[70,80,105])
console.log(x);