import React from "react";
import styles from './automatic-display.module.css'

const Display = () => {

  return <div className={'wrapper display'}>
    <h3 className={styles.heading}>Automatic Composting Machines</h3>
    <p className={styles.paragraph}>Automatic Composting Machine (ACM) is all about converting Organic Waste to Organic Fertilizer called Compost, in the fastest possible time. What would take 2-3 months to get composted by the natural process, an ACM should be able to compost it in 6-7 days.</p>
    <p className={styles.paragraph}>The organic waste (food waste, garden waste, dry leaves etc.) is loaded into the composting machine through a hopper. The organic waste is to be fed to the microorganisms (bacteria), smaller the feed size faster is the conversion. So, a waste shredder is incorporated to shred the organic waste into smaller size components.</p>
    <p className={styles.paragraph}>Add Bio-culture and absorbent (if available) to the waste fed in ACM. Bio-culture is a mixture of microorganism cultures that accelerate the aerobic composting of bio degradable organic waste. It also treats the waste and makes it free from pathogens, foul smells and weed seeds. Bio-culture is a key input in the composting process and consists of cultures of naturally occurring bacteria, fungi etc. along with enzymes. These facilitate the rapid conversion of organic waste into a bio-stabilized compost. It is free from any toxic or hazardous components. It preserves the vital nutrients and organic matter in the waste.</p>
    <p className={styles.paragraph}>The waste then goes into the holding tank where it undergoes mixing & curing. The retention time depends on the nature of the compost required. Pre-compost is obtained in 1 day; Dry-compost in 6-7 days. Also, addition of saw dust will decrease the curing time and help get dry compost in shorter time. An air blower system is incorporated which maintains a temperature of 40-45deg C favourable for microorganisms involved in decomposition.</p>
    <p className={styles.paragraph}>The organic waste mixture is turned everyday by the composting machine to facilitate aeration and spread of microbial activity. The process is repeated for the next few days and new waste generated daily can be added to the machine. In 6-7 days, the waste loaded on the initial day is converted into compost and can be used as organic manure. Following a sequence, the waste loaded on later days will be coming out of the composting machine as compost on FIFO basis.</p>
    <h4 className={styles.heading}>Maximizing Composting Process Efficiency</h4>
    <p className={styles.paragraph}>Composting, or controlled decomposition, requires a proper balance of “green” organic materials and “brown” organic materials. “Green” organic material includes grass clippings, food scraps, and manure, which contain large amounts of nitrogen. “Brown” organic material includes dry leaves, saw dust, wood chips, and branches, which contain large amounts of carbon but little nitrogen. So, adding sawdust, dry leaves and other carbon rich material along with the organic waste can lead to better decomposition of waste resulting in better quality compost.</p>
    <h4 className={styles.heading}>Comparison of Machine With Competition</h4>
    <p className={styles.paragraph}><b>Major competitors in this field are claiming compost in 24 hrs which is not scientifically feasible and not a green solution.</b></p>
    <p className={styles.paragraph}>There are issues in Bangalore with such machines provided by competition as can be seen from the news articles given below:</p>
    <div className={styles.news}>
      <p className={styles.paragraph}><a href='https://www.thehindu.com/news/cities/bangalore/apartments-fall-prey-to-unauthorised-instant-compost-making-machines/article25554305.ece'>Some excerpts from a report in The Hindu dated November 21, 2018 </a></p>
      <p className={styles.paragraph}><blockquote className={styles.ludwig}>They claim to be environment friendly, but consume more electricity and produce ‘pre-compost’</blockquote></p>
      <p className={styles.paragraph}><blockquote className={styles.ludwig}>The electricity bill went up to ₹30,000 a month.</blockquote></p>
      <p className={styles.paragraph}><blockquote className={styles.ludwig}>It’s only after they bought the products that residents realised these machines not only consume a lot of electricity but also churn out ‘pre-compost’ in the end, which is dried garbage. These machines cost ₹8.5 lakh and above.</blockquote></p>
    </div>
    <div className={styles.news}>
      <p className={styles.paragraph}><a href='https://www.thenewsminute.com/article/harmful-environment-bengaluru-citizens-group-slams-instant-compost-machines-92038'>Some excerpts from a report in The News Minute dated November 22, 2018</a>  </p>
      <p className={styles.paragraph}><blockquote className={styles.ludwig}>Many apartment complexes, hotels, malls and other commercial establishments in Bengaluru have been using the so-called ‘24-hour composting units’ to treat the large amounts of solid waste that they generate.</blockquote></p>
      <p className={styles.paragraph}><blockquote className={styles.ludwig}>The vendors say the machines are organic waste converters. But in reality, they are just incinerators. Instead of producing compost, the machines generate burnt carbon with high electrical conductivity. And this, when added to soil, is harmful for the plants,” said Savita Hiremath, a member of SWMRT.</blockquote></p>
      <p className={styles.paragraph}><blockquote className={styles.ludwig}>The compost from the machines was submitted to a soil and material testing laboratory in Bengaluru. And the results were contrary to the claims made by the vendors,” said Savita. The results revealed zero micro bacterial loads. </blockquote></p>
      <p className={styles.paragraph}><blockquote className={styles.ludwig}>The report further suggested a high acidic level in the compost derived from the machines, along with an electrical conductivity that was 130 times higher than the international standard. Also, the sample showed a carbon-nitrogen ratio of 18:06, against the accepted value of 30:1.</blockquote></p>
    </div>
    <table className={styles.comaprisontable}>
      <tr>
        <th>Parameter</th>
        <th>Green Innovations</th>
        <th>24 Hr Composting Machines</th>
      </tr>
      <tr>
        <td>Electricity Consumption</td>
        <td>2 units/day</td>
        <td>20-25 units/day</td>
      </tr>
      <tr>
        <td>Natural Process</td>
        <td>Yes, with the help of microbes</td>
        <td>No, Heating & drying to carbon rich output</td>
      </tr>
      <tr>
        <td>In-built Shredder</td>
        <td>Yes, made ofTool Steel material</td>
        <td>No, External shredder needed</td>
      </tr>
      <tr>
        <td>Output Quality</td>
        <td>Natural Compost</td>
        <td>Charred & Dehydrated waste</td>
      </tr>
      <tr>
        <td>Heater</td>
        <td>Air blower to maintain a temperature of 40 deg C inside curing chamber</td>
        <td>Body heater to heat the waste at a temperature of 100-200 deg C</td>
      </tr>
      <tr>
        <td>Green Solution</td>
        <td>Yes</td>
        <td>No</td>
      </tr>
    </table>

  </div>
}

export default Display