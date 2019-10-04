/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

    const basic = 500;
    const master = 800;
    let hours =0;
    let weeks =0;
    for (let key in config) {
        if (key===focus) {
            hours = config[key];
        }
    }

    if(knowsProgramming)
      {
          weeks = Math.ceil(800/hours);
      }
    else if(!knowsProgramming)
      {
          weeks = Math.ceil((800/hours) + (500/hours));
      }
    return weeks;
  };
  