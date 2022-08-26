// batsman, situation, bowling team
// batsman -> form(20), skill(10), moral(5), fitness(5) (30)
// situations -> pitch(10)
// bowling team -> skill(10), previous scores (10) (20)
// randomness -> 20

// match formate 20,50,test 
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function NextScore(Player, FormateType, MatchSituation, BowlingTeam) {
    let Result = {
        runs: 0,
        balls: 0,
        _4s: 0,
        _6s: 0,
        not_out: true,
        out_type: null
    };
    // weights
    let form_weight = 1;
    let skill_weight = 1;
    let moral_weight = 0.5;
    let fitness_weight = 0.5;
    let pitch_weight = 1;
    let divide_factor = 5;
    let final_adjustor = 0.5;

    let min_range = -5;
    let max_range = FormateType.max_score;

    // batting
    if (Player.form > 85)
        min_range += (Player.form / divide_factor) * form_weight;
    else
        max_range -= ((100 - Player.form) / divide_factor) * form_weight;

    if (Player.moral > 75)
        min_range += (Player.moral / divide_factor) * moral_weight;
    else
        max_range -= ((100 - Player.moral) / divide_factor) * moral_weight;

    if (Player.fitness > 80)
        max_range += (Player.fitness / divide_factor) * fitness_weight;
    else
        max_range -= ((100 - Player.fitness) / divide_factor) * moral_weight;


    let skill_difference = Player.skill - BowlingTeam.skill;
    max_range += skill_difference * skill_weight;
    min_range += skill_difference * skill_weight;

    if (MatchSituation.pitch > 50)
        min_range += (MatchSituation.pitch / divide_factor) * pitch_weight;
    else
        max_range -= ((100 - MatchSituation.pitch) / divide_factor) * pitch_weight;

    let final_score = Math.max(0, parseInt(getRandomArbitrary(min_range, max_range) * final_adjustor));
    // console.log(max_range + " " + min_range);

    Player.runs = final_score;

    // for bowls calculations
    return final_score;
}
