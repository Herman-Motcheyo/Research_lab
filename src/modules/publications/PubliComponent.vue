
<template>
  <div>
    <div v-for="(publication, index) in publications" :key="index" v-show="index < numerPub" class="publication">
      <div class="header">
        <div class="icon">
          <span>📄</span>
        </div>
        <h3 class="title">{{ publication.title }}</h3>
      </div>
      <p class="authors">{{ publication.authors }}</p>
      <a :href="publication.link" class="link">Publisher's website</a>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"

defineProps({
  numerPub : {
    type: Number,
    required: true
  }
})

const publications = ref([
  {
    title: 'Enhancing hygroscopic capacities of metakaolin based porous insulating geopolymers: Comparative effects of calcium silicate and sodium polyacrylate',
    authors: 'Elie Kamseu, Zénabou NM Ngouloure, Lauraine K Tiogning-Djiogue et al.',
    abstract: 'The extent of dissolution and polymerization/polycondensation of metakaolin added biomass to alkaline solution was exploited to design highly porous insulating geopolymers using sodium polyacrylate and calcium silicate to enhance their hygroscopic properties. 2.5 to 7.5 wt % of sodium polyacrylate and 20–40 wt % of calcium silicate efficiently embedded into the geopolymer gel were able to increase the absorption and desorption capacities between 30 and 50% while maintaining the thermal conductivity at 0.13–0.16 W m−1K−1 at 70% of relative humidity and 0.22–0.28 W m−1K−1 when the relative humidity is above 80%.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S2352710223001997',
    year: "2023",
    journal: "Elsevier"
  },

  {
    title: 'Natural iron-aluminosilicate as potential solid precursor for supplementary cementitious materials: A comparative study with other aluminosilicates',
    authors: 'Joelle Nadia Nouping Fekoua, Paul Venyite, Seunkole Bila, Elie Kamseu, et al.',
    abstract: 'The objective of this study was to investigate the impact of the geographic and climatic conditions on laterites properties and on geopolymerization based-laterite. Four different laterite deposits in the four geographical zones of Cameroon were studied. This included the center, north, south and west corners of Cameroon, having chemical composition of SiO2 + Al2O3 + Fe2O3 = 88.94, 87.6, 89.13 and 78.97%, respectively. ',
    link: 'https://www.sciencedirect.com/science/article/pii/S2405844023049587#ack0010',
     year: "2023",
      journal: "Elsevier"
  },
  {
    title: 'Performances of laterite-based geopolymer matrice filters on the bacteriological filtration of contaminated groundwater and microstructure',
    authors: 'Linda Lekuna Duna, Cyriaque Rodrigue Kaze, Joelle Nadia Nouping Fekoua et al.',
    abstract: 'In this study Rice husk ash (RHA) obtained from rice husk an agricultural waste product is used to produce the laterite based geopolymer matrices. Five different water sources were analysed and passed through the laterite based geopolymer matrices filters (LBGMF). Bacteriological analysis was used to assess the efficiency of the LBGMF. The filters were obtained by altering laterite with different percentages of RHA as 0, 10, 20, 30, 40.wt%. ',
       link: '  https://www.sciencedirect.com/science/article/abs/pii/S2214714423002180',
        year: "2023",
         journal: "Elsevier"
  },
  {
    title: 'Influence of calcined laterite on the physico-mechanical, durability and microstructure characteristics of portland cement mortar',
    authors: 'Rodrigue Cyriaque Kaze, Théodore Gautier L. J Bikoko, Adeyemi Adesina, Jean Chills Amba, Özgür Cengiz, Abdolhossein Naghizadeh, Solomon Oyebisi & Elie Kamseu',
    abstract: 'Most investigations in the literature concerning cement replacement with supplementary cementitious materials (SCMs) have predominantly focused on the utilization of fly ash and slag, which are not universally available. Laterite soil presents itself as a potential alternative to these commonly used SCMs, particularly where availability is an issue.',
    link: 'https://link.springer.com/article/10.1007/s41062-024-01564-9',
     year: "2023",
     journal: "Elsevier"
  },
  {
    title: 'Formulation of geopolymer binder based on volcanic-scoria and clay brick wastes using rice husk ash-NaOH activator: Fresh and hardened properties',
    authors: 'Rodrigue Cyriaque Kaze, Abdolhossein Naghizadeh, Leonel Tchadjie, Özgür Cengiz, Elie Kamseu, Florence Uphie Chinje',
    abstract: 'The present study investigated the influence of the replacement of waste clay bricks (WB) by volcanic scoria (Zg) on the fresh and hardened properties of geopolymer binders for potential construction applications at ambient temperature. Geopolymer paste samples were prepared using Zg as raw material blended with WB ranging from 0 to 50 wt% of total raw materials. Alternative alkaline activator used for the geopolymer synthesis was prepared by mixing rice husk ash (RHA) and 6 mol/L of NaOH solution.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S235255412400202X',
     year: "2023",
      journal: "Elsevier"
  },
  {
    title: 'Comparison of feldspar and meta-halloysite geopolymers by alkaline and acidic activation',
    authors: 'Achile Nana, Ida Kouam Tchummegne, Sylvain Tome et al.',
    abstract: 'Geopolymerization, a sustainable route to advanced binders, has traditionally been explored using common activators and single precursors such as metakaolin. Although previous investigations have explored the potential of feldspathic minerals, particularly with metakaolin as a partial replacement, there remains a gap in understanding the nuances of feldspar-phosphate-based geopolymers.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0950061824010948',
     year: "2023",
     journal: "Elsevier"
    },
  {
    title: 'Reaction kinetics and microstructure of pegmatite-based geopolymer composites: influence of calcined clay nature',
    authors: 'Achile Nana, Thamer Alomayri, Sylvain Tome, Susanta Nath, Elie Kamseu',
    abstract: 'This research reports the investigations of threshold reactivity limit of blends of pegmatite with different calcined clays as well as the influence of calcined clay source on the geopolymerization kinetic, microstructural, and physico-mechanical properties of feldspathic mineral-based inorganic polymer composites.',
    link: 'https://ceramics.onlinelibrary.wiley.com/doi/abs/10.1111/jace.19576',
     year: "2023",
      journal: "Elsevier"
  },
  {
    title: 'Effect of milled pegmatite quarry wastes powders on structure, microstructure and mechanical properties of pegmatite-based geopolymers',
    authors: 'Achile Nana, Eric Ngankam Sakue, Paul Venyite et al.',
    abstract: 'In this investigation, mechanical activation (MA) of pegmatite quarry wastes was perform via an eccentric vibratory mill to improve the geopolymeric reactivity. The MA at miscellaneous times (0 to 90 min) resulted in different activation degrees of samples with improved the fineness of particle size and specific surface area from 2.974 to 5.311 m2.g− 1',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S258915292400019X',
     year: "2023",
      journal: "Elsevier"
  },
  {
    title: 'Design and characterization of iron–calcium–aluminium–silicate–hydrate as low-temperature binder',
    authors: 'Julson Aymard Tchio, Ngu Yerima, Cyriaque Rodrigue Kaze, Elie Kamseu et al.',
    abstract: 'his work aims to synthesize new cementitious materials (binders) using marble powder, rice husk ash, activated laterite and NaOH solution by applying low energy process. The binder was used to stabilize solid precursors (laterite and pozzolan).',
    link: 'https://link.springer.com/article/10.1007/s41062-023-01329-w',
     year: "2023",

     journal: "Elsevier"
  },
  {
    title: 'Thermal, mechanical, and microstructural properties of inorganic polymer composites from quarry wastes (feldspathic minerals)',
    authors: 'Achile Nana, Giovanni Ridolfi, Claudelle Sybilline Djadock Anensong et al.',
    abstract: 'In the recent century, geopolymer materials have grown significantly due to their unique properties applicable in many different fields. In the present work, the heat evolution, thermal and mechanical behavior of inorganic geopolymer composites (IPCs), based on solid solution of feldspathic minerals (pegmatite and granite) or sand quartz that were altered by a low fraction (15–20 mass%) of calcined clay (metakaolin or calcined halloysite).',
    link: 'https://link.springer.com/article/10.1007/s10973-023-12382-z',
     year: "2023",
     journal: "Elsevier"
  },
  {
    title: 'Design and characterization of Cameroonian pegmatite-calcined clay binary mortars via geopolymerization',
    authors: 'Achile Nana, Rashmi Singla, Thamer Alomayri et al.',
    abstract: 'In this work, geopolymer binders obtained from a mixture of Cameroonian pegmatite and type 1/1 calcined clays (metakaolin and metahalloysite) at different proportions (10–30 wt%) were used for the formulation of mortars. The kinetic parameters of the reactivity of the pegmatite mixed with different calcined clays in alkaline medium were evaluated via heat of reaction data measured at isothermal conduction calorimeter (ICC) at 27 °C for the first 24 h.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S2352710223012573',
     year: "2023",
     journal: "Elsevier"
  },
  {
    title: 'Low-temperature high-strength lightweight refractory composites: Pore structures and insulating properties',
    authors: 'Juvenal Giogetti Deutou Nemaleu, Lynn Myllyam Beleuk à Moungam, L Van Essa et al.',
    abstract: 'Functional refractory remains critical due to its intrinsic properties such as: saving space, lightweight and excellent thermal stability to achieve the trade-off between insulating and overall performances. The present study deals with the production of low carbon footprint and lightweight refractory matrices, with controllable pores structures, thermally stable and having low thermal conductivities.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0272884223011525',
     year: "2023",
     journal: "Elsevier"
  }])

  const filteredPublications = () =>
      publications.filter((_, index) => index > props.numerPub)
      ;
</script>

<style>
.publication {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 1.2rem;
}

.title {
  font-size: 1.1rem;
  font-weight: 500;
}

.authors {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.link {
  color: #007bff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>