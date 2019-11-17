import React from "react";
import styles from './manual-display.module.css'

const Display = () => {

  return <div className={'wrapper display'}>
    <h3 className={styles.heading}>Manual Composting Machines</h3>
    <p className={styles.paragraph}>Manual Composting Machine (MCM) or Semi-Automatic Composting Machine helps in converting Organic Waste to Organic Fertilizer called Compost. What would take 2-3 months to get composted by the natural process, this machine will compost in 15 days. </p>
    <p className={styles.paragraph}>The organic waste (food waste, garden waste, dry leaves etc.) is loaded into the composting machine through a hopper. The organic waste is to be fed to the microorganisms (bacteria), smaller the feed size faster is the conversion. So, a waste shredder is incorporated to shred the organic waste into smaller size components.</p>
    <p className={styles.paragraph}>Add Bio-culture and absorbent (sawdust etc.) to the waste fed in MCM. Bio-culture is a mixture of microorganism cultures that accelerate the aerobic composting of bio degradable organic waste. It also treats the waste and makes it free from pathogens, foul smells and weed seeds. Bio-culture is a key input in the composting process and consists of cultures of naturally occurring bacteria, fungi etc. along with enzymes. These facilitate the rapid conversion of organic waste into a bio-stabilized compost. It is free from any toxic or hazardous components. It preserves the vital nutrients and organic matter in the waste. Also, addition of saw dust will decrease the curing time and help get dry compost in shorter time.</p>
    <h4 className={styles.heading}>Maximizing Operation Efficiency</h4>
    <p className={styles.paragraph}>The waste then goes into the mixing tank fitted with rotating mixer shaftwhere it undergoes mixing for 15 minutes. After 15 minutes, the properly mixed waste is taken out of the composting machine and transferred to plastic crates. These crates have very good ventilation and smooth interiors with sturdy exteriors to handle the load. The plastic crates are then arranged on racks for curing. Next day, the new waste mixture from machine is transferred to different plastic crates and the process is repeated for 2 weeks.</p>
    <p className={styles.paragraph}>Every day, the organic waste mixture in all the plastic crates is to be turned & mixed manually. This facilitates aeration and spread of microbial activity. This process is repeated for the next 2 weeks. </p>
    <p className={styles.paragraph}>After a week on the rack, water needs to be sprinkled on the waste mixture using a sprinkler. Then the mixture has to be turned. </p>
    <p className={styles.paragraph}>After 2 weeks, the waste mixture in the first lot of plastic crates is converted into compost and can be used as organic manure. Following that sequence, the waste mixture in plastic crates added on later days will be turned into compost. </p>
    <h4 className={styles.heading}>Maximizing Composting Process Efficiency</h4>
    <p className={styles.paragraph}>Composting, or controlled decomposition, requires a proper balance of “green” organic materials and “brown” organic materials. “Green” organic material includes grass clippings, food scraps, and manure, which contain large amounts of nitrogen. “Brown” organic material includes dry leaves, saw dust, wood chips, and branches, which contain large amounts of carbon but little nitrogen. So, adding sawdust, dry leaves and other carbon rich material along with the organic waste can lead to better decomposition of waste resulting in better quality compost.</p>
  </div>
}

export default Display