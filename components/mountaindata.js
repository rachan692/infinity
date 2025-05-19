const mountainData = {
    everest: {
      name: "Mount Everest",
      description: "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation of 8,848.86 m (29,031.7 ft) was most recently established in 2020.",
      altitude: "8848.86 m",
      range: "Mahalangur Himal, Nepal/Tibet",
      groupSize: "2-12 People",
      tripDuration: "60 Days",
      bestSeasons: "Spring (April-May), Autumn (September-October)",
      activities: "Mountaineering Expedition",
      difficulties: "Extreme / Physical / Technical",
      accommodations: "Hotel/Tea house/Tented Camp",
      price: 65000,
      attractions: [
        {
          title: "1:1 Ratio (1 Certified Mountain Guide and 1 Climber)",
          description: "Everest Expedition maintains a complete personalized climbing experience with one certified mountain guide to a climber ratio. This will ensure that you are getting expert guidance throughout the journey, personalized attention, and maximum safety that will increase the chances of your success."
        },
        {
          title: "Professional and Experienced Guides and Support Guides",
          description: "The expedition is led by a team of professional and experienced guides who are well-versed in high-altitude climbing and the unique challenges of Mount Everest. These experts, along with skilled support guides, provide essential technical assistance, route planning, and motivation to ensure a safe and rewarding climb."
        },
        {
          title: "Challenging High-Altitude Climbing Experience Above 8,000m ASL",
          description: "Climbing Everest offers the ultimate high-altitude challenge, with elevations above 8,000 meters (26,247 feet). Advanced skills, lots of endurance, and stamina are needed in this expedition, hence making it perfect for serious and seasoned mountaineers."
        },
        {
          title: "Comprehensive Base Camp and Advanced Camps",
          description: "The route will have a complete and fully equipped base camp with advanced camps for better living conditions. Climbing accommodations with all essential supplies and rest opportunities. These camps become some of the most important stopover points for acclimatization and planning for further expedition plans."
        },
        {
          title: "World-Famous Khumbu Icefall and Hillary Step",
          description: "Experience climbing through the legendary Khumbu Icefall and the historic Hillary Step, some of mountaineering's most iconic challenges."
        }
      ],
      itinerary: [
        { day: 1, description: "Arrival in Kathmandu (1,400m)", accommodation: "Hotel in Kathmandu" },
        { day: 2, description: "Preparation and briefing in Kathmandu", accommodation: "Hotel in Kathmandu" },
        { day: 3, description: "Fly to Lukla (2,840m) and trek to Phakding (2,610m)", accommodation: "Tea House" },
        { day: 4, description: "Trek to Namche Bazaar (3,440m)", accommodation: "Tea House" },
        { day: 5, description: "Acclimatization day in Namche Bazaar", accommodation: "Tea House" },
        { day: 6, description: "Trek to Tengboche (3,870m)", accommodation: "Tea House" },
        { day: 7, description: "Trek to Dingboche (4,360m)", accommodation: "Tea House" },
        { day: 8, description: "Acclimatization day in Dingboche", accommodation: "Tea House" },
        { day: 9, description: "Trek to Lobuche (4,940m)", accommodation: "Tea House" },
        { day: 10, description: "Trek to Everest Base Camp (5,364m) and back to Gorak Shep (5,170m)", accommodation: "Tea House" },
        { day: 11-58, description: "Climbing period (Base Camp to Summit attempt and return)", accommodation: "Tented Camp" },
        { day: 59, description: "Return trek to Lukla", accommodation: "Tea House" },
        { day: 60, description: "Fly back to Kathmandu", accommodation: "Hotel in Kathmandu" }
      ],
      includes: [
        "Airport pickups and drops in private vehicle",
        "All ground transportation as per the itinerary",
        "Climbing permit, Garbage deposit",
        "All necessary paperwork and permits",
        "Experienced climbing guides (1:1 ratio) with equipment",
        "Base camp and high camps setup with equipment",
        "Base camp support staff (cooks, kitchen helpers)",
        "All meals during the expedition",
        "Two oxygen cylinders per climber with mask and regulator",
        "Medical supplies and emergency evacuation arrangement",
        "Satellite phone for emergency use",
        "Insurance for all Nepali staff"
      ],
      excludes: [
        "International airfare to and from Kathmandu",
        "Personal climbing gear and equipment",
        "Personal travel insurance (mandatory) and trip cancellation insurance",
        "Additional oxygen bottles beyond the included two",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and staff"
      ],
      firstAscent: {
        date: "May 29, 1953",
        team: "Sir Edmund Hillary and Tenzing Norgay Sherpa",
        route: "South Col Route"
      }
    },
    
    manaslu: {
      name: "Mount Manaslu",
      description: "Mount Manaslu is the eighth highest mountain in the world at 8,163 meters (26,781 ft) above sea level. It is located in the Mansiri Himal, part of the Nepalese Himalayas, in the west-central part of Nepal. The mountain's name comes from the Sanskrit word 'manasa', meaning 'intellect' or 'soul'.",
      altitude: "8163 m",
      range: "Mansiri Mountain Range, Nepal",
      groupSize: "2-10 People",
      tripDuration: "46 Days",
      bestSeasons: "Autumn",
      activities: "Mountaineering Expedition",
      difficulties: "Extreme / Physical",
      accommodations: "Hotel/Tea house/Tented Camp",
      price: 18500,
      attractions: [
        {
          title: "1:1 Ratio (1 Certified Mountain Guide and 1 Climber)",
          description: "Manaslu Expedition maintains a complete personalized climbing experience with one certified mountain guide to a climber ratio. This will ensure that you are getting expert guidance throughout the journey, personalized attention, and maximum safety that will increase the chances of your success."
        },
        {
          title: "Professional and Experienced Guides and Support Guides",
          description: "The expedition is led by a team of professional and experienced guides who are well-versed in high-altitude climbing and the unique challenges of Mount Manaslu. These experts, along with skilled support guides, provide essential technical assistance, route planning, and motivation to ensure a safe and rewarding climb."
        },
        {
          title: "Challenging High-Altitude Climbing Experience Above 8,000m ASL",
          description: "Climbing Manaslu offers the ultimate high-altitude challenge, with elevations above 8,000 meters (26,245 feet). Advanced skills, lots of endurance, and stamina are needed in this expedition, hence making it perfect for serious and seasoned mountaineers."
        },
        {
          title: "A Perfect Serious Technical Climbing Mountain Above 8,000 Meters",
          description: "Renowned for its technical difficulty and demanding terrain, Manaslu is a mountaineer's dream. A combination of steep ascents, icy ridges, and unpredictable weather creates a thrilling and rewarding experience for those seeking a true alpine adventure."
        },
        {
          title: "Group Climbing Gears",
          description: "The expedition provides all group climbing gear, including fixed ropes, anchors, ladders, and more. Shared resources mean that climbers are better equipped to deal with the formidable challenges that the mountain presents while minimizing individual load and maximizing efficiency."
        },
        {
          title: "Full Base Camp Setup and Above Camps",
          description: "The route will have a complete and fully equipped base camp with advanced camps for better living conditions. Climbing accommodations with all essential supplies and rest opportunities. These camps become some of the most important stopover points for acclimatization and planning for further expedition plans."
        },
        {
          title: "Local Specialty Alpine Cuisine in Trek-In and Base Camp",
          description: "The expedition prioritizes climbers' nutrition with specialized alpine cuisine prepared by experienced chefs, from energizing meals during the trek to high-calorie dishes at base camp, the focus is to maintain strength and stamina for the grueling climb."
        },
        {
          title: "Two Oxygen Cylinders Per Climber with Mask and Regulator",
          description: "Each climber is given two oxygen cylinders, a mask, and a regulator, all of which are meant for survival at high altitude. This very important equipment means that climbers can deal with the thin air above 8,000 meters and ensure that they perform better in safetymatters."
        },
        {
          title: "Medical Mask, Regulator, and Oxygen Cylinder at Base Camp",
          description: "For extra safety, at the base camp, there is a supplementary set of oxygen equipment in case of any medical emergency. This measure will ensure that climbers have peace of mind and can easily seek immediate help if needed."
        },
        {
          title: "Weather Forecasting Reports",
          description: "The expedition depends on updated and correct weather forecasting reports to plan the summit push and other important climbs during the expedition."
        }
      ],
      itinerary: [
        { day: 1, description: "Arrival in Kathmandu (1,400m)", accommodation: "Hotel in Kathmandu" },
        { day: 2, description: "Preparation and briefing in Kathmandu", accommodation: "Hotel in Kathmandu" },
        { day: 3, description: "Drive to Soti Khola (710m)", accommodation: "Tented Camp" },
        { day: 4, description: "Trek to Machha Khola (930m)", accommodation: "Tented Camp" },
        { day: 5, description: "Trek to Jagat (1,410m)", accommodation: "Tented Camp" },
        { day: 6, description: "Trek to Deng (1,804m)", accommodation: "Tented Camp" },
        { day: 7, description: "Trek to Namrung (2,630m)", accommodation: "Tented Camp" },
        { day: 8, description: "Trek to Samagaon (3,530m)", accommodation: "Tented Camp" },
        { day: 9, description: "Acclimatization day in Samagaon", accommodation: "Tented Camp" },
        { day: 10, description: "Trek to Manaslu Base Camp (4,800m)", accommodation: "Tented Camp" },
        { day: 11-44, description: "Climbing period (Base Camp to Summit attempt and return)", accommodation: "Tented Camp" },
        { day: 45, description: "Return trek to Samagaon", accommodation: "Tented Camp" },
        { day: 46, description: "Return to Kathmandu by helicopter", accommodation: "Hotel in Kathmandu" }
      ],
      includes: [
        "Airport pickups and drops in private vehicle",
        "All ground transportation as per the itinerary",
        "Climbing permit, Garbage deposit",
        "All necessary paperwork and permits",
        "Experienced climbing guides (1:1 ratio) with equipment",
        "Base camp and high camps setup with equipment",
        "Base camp support staff (cooks, kitchen helpers)",
        "All meals during the expedition",
        "Two oxygen cylinders per climber with mask and regulator",
        "Medical supplies and emergency evacuation arrangement",
        "Satellite phone for emergency use",
        "Insurance for all Nepali staff",
        "Return helicopter flight from Samagaon to Kathmandu"
      ],
      excludes: [
        "International airfare to and from Kathmandu",
        "Personal climbing gear and equipment",
        "Personal travel insurance (mandatory) and trip cancellation insurance",
        "Additional oxygen bottles beyond the included two",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and staff"
      ],
      firstAscent: {
        date: "May 9, 1956",
        team: "Toshio Imanishi, Gyalzen Norbu, Sherpa, and Minoru Higeta",
        route: "Northeast Face Route"
      }
    },
    
    amaДablam: {
      name: "Ama Dablam",
      description: "Ama Dablam is one of the most spectacular mountains in the world, with its sharp ridges and steep faces. The mountain's name means 'Mother's necklace'; the long ridges on each side like the arms of a mother (ama) protecting her child, and the hanging glacier thought of as the dablam, the traditional double-pendant containing pictures of the gods worn by Sherpa women.",
      altitude: "6812 m",
      range: "Mahalangur Himal, Nepal",
      groupSize: "2-12 People",
      tripDuration: "28 Days",
      bestSeasons: "Autumn (October-November), Spring (April-May)",
      activities: "Mountaineering Expedition, Technical Climbing",
      difficulties: "Technical / Physical",
      accommodations: "Hotel/Tea house/Tented Camp",
      price: 12500,
      attractions: [
        {
          title: "Technical Climbing on One of World's Most Beautiful Mountains",
          description: "Ama Dablam is known for its stunning beauty and technical climbing challenges. The expedition offers a perfect balance of aesthetic pleasure and climbing difficulty on one of the most photographed mountains in the Himalayas."
        },
        {
          title: "Professional and Experienced Guides and Support Guides",
          description: "The expedition is led by a team of professional and experienced guides who are well-versed in technical climbing and the unique challenges of Ama Dablam. These experts provide essential technical assistance, route planning, and motivation to ensure a safe and rewarding climb."
        },
        {
          title: "Spectacular Views of the Everest Region",
          description: "The climb offers stunning panoramic views of Mount Everest, Lhotse, Nuptse, and other Himalayan giants throughout the journey, making it a visually rewarding experience even before reaching the summit."
        },
        {
          title: "Technical Rock, Ice, and Mixed Climbing",
          description: "Ama Dablam presents various technical challenges including rock climbing, ice climbing, and mixed terrain. Climbers will navigate the famous Yellow Tower, Mushroom Ridge, and Dablam Glacier, providing a comprehensive technical climbing experience."
        },
        {
          title: "Well-Established Base Camp and High Camps",
          description: "The expedition features a comfortable base camp and strategically placed high camps, allowing for proper acclimatization and rest during the challenging climb."
        }
      ],
      itinerary: [
        { day: 1, description: "Arrival in Kathmandu (1,400m)", accommodation: "Hotel in Kathmandu" },
        { day: 2, description: "Preparation and briefing in Kathmandu", accommodation: "Hotel in Kathmandu" },
        { day: 3, description: "Fly to Lukla (2,840m) and trek to Phakding (2,610m)", accommodation: "Tea House" },
        { day: 4, description: "Trek to Namche Bazaar (3,440m)", accommodation: "Tea House" },
        { day: 5, description: "Acclimatization day in Namche Bazaar", accommodation: "Tea House" },
        { day: 6, description: "Trek to Tengboche (3,870m)", accommodation: "Tea House" },
        { day: 7, description: "Trek to Pangboche (3,930m)", accommodation: "Tea House" },
        { day: 8, description: "Trek to Ama Dablam Base Camp (4,570m)", accommodation: "Tented Camp" },
        { day: 9, description: "Base Camp rest and preparation day", accommodation: "Tented Camp" },
        { day: 10-25, description: "Climbing period (Base Camp to Summit attempt and return)", accommodation: "Tented Camp" },
        { day: 26, description: "Trek from Base Camp to Pangboche", accommodation: "Tea House" },
        { day: 27, description: "Trek to Namche Bazaar", accommodation: "Tea House" },
        { day: 28, description: "Trek to Lukla and fly to Kathmandu", accommodation: "Hotel in Kathmandu" }
      ],
      includes: [
        "Airport pickups and drops in private vehicle",
        "All ground transportation as per the itinerary",
        "Climbing permit, Garbage deposit",
        "All necessary paperwork and permits",
        "Experienced climbing guides with equipment",
        "Base camp and high camps setup with equipment",
        "Base camp support staff (cooks, kitchen helpers)",
        "All meals during the expedition",
        "Medical supplies and emergency evacuation arrangement",
        "Satellite phone for emergency use",
        "Insurance for all Nepali staff"
      ],
      excludes: [
        "International airfare to and from Kathmandu",
        "Personal climbing gear and equipment",
        "Personal travel insurance (mandatory) and trip cancellation insurance",
        "Oxygen bottles (typically not required for Ama Dablam)",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and staff"
      ],
      firstAscent: {
        date: "March 13, 1961",
        team: "Mike Gill, Barry Bishop, Mike Ward and Wally Romanes",
        route: "Southwest Ridge"
      }
    },
    
    himlung: {
      name: "Himlung Himal",
      description: "Himlung Himal is a 7,126 meter (23,379 ft) mountain in the Manaslu region of Nepal. It was opened to climbing only in 1992, making it one of the newer peaks available to mountaineers. Located in a remote area between the Annapurna and Manaslu regions, it offers a less crowded climbing experience compared to more popular peaks.",
      altitude: "7126 m",
      range: "Manaslu Region, Nepal",
      groupSize: "2-12 People",
      tripDuration: "30 Days",
      bestSeasons: "Spring (April-May), Autumn (September-October)",
      activities: "Mountaineering Expedition",
      difficulties: "Moderate / Physical",
      accommodations: "Hotel/Tea house/Tented Camp",
      price: 9800,
      attractions: [
        {
          title: "Perfect 7000m Peak for Preparation or Experience",
          description: "Himlung Himal offers a perfect opportunity for climbers looking to gain experience at higher altitudes. It's an ideal preparation peak for those planning to attempt 8000m mountains in the future."
        },
        {
          title: "Less Crowded Route and Pristine Environment",
          description: "Being less known than other Himalayan peaks, Himlung Himal provides a more solitary and peaceful climbing experience in an unspoiled mountain environment."
        },
        {
          title: "Spectacular Scenery and Cultural Experience",
          description: "The approach trek passes through beautiful landscapes and traditional villages of the Manang region, offering climbers a rich cultural experience alongside the mountaineering adventure."
        },
        {
          title: "Moderate Technical Difficulty",
          description: "While challenging, Himlung Himal is considered moderately difficult in terms of technical climbing, making it accessible to climbers with previous mountaineering experience but who may not be ready for the most technical peaks."
        },
        {
          title: "Complete Base Camp and High Camp Setup",
          description: "The expedition includes fully equipped base camp and high camps with all necessary facilities to ensure comfort and safety throughout the climbing period."
        }
      ],
      itinerary: [
        { day: 1, description: "Arrival in Kathmandu (1,400m)", accommodation: "Hotel in Kathmandu" },
        { day: 2, description: "Preparation and briefing in Kathmandu", accommodation: "Hotel in Kathmandu" },
        { day: 3, description: "Drive to Besisahar (760m)", accommodation: "Lodge" },
        { day: 4, description: "Drive to Koto (2,600m)", accommodation: "Lodge" },
        { day: 5, description: "Trek to Meta (3,560m)", accommodation: "Tented Camp" },
        { day: 6, description: "Trek to Phu village (4,080m)", accommodation: "Tented Camp" },
        { day: 7, description: "Acclimatization day in Phu village", accommodation: "Tented Camp" },
        { day: 8, description: "Trek to Himlung Base Camp (4,920m)", accommodation: "Tented Camp" },
        { day: 9, description: "Rest and acclimatization at Base Camp", accommodation: "Tented Camp" },
        { day: 10-27, description: "Climbing period (Base Camp to Summit attempt and return)", accommodation: "Tented Camp" },
        { day: 28, description: "Trek back to Phu village", accommodation: "Tented Camp" },
        { day: 29, description: "Trek to Meta", accommodation: "Tented Camp" },
        { day: 30, description: "Return to Kathmandu via Koto and Besisahar", accommodation: "Hotel in Kathmandu" }
      ],
      includes: [
        "Airport pickups and drops in private vehicle",
        "All ground transportation as per the itinerary",
        "Climbing permit, Garbage deposit",
        "All necessary paperwork and permits",
        "Experienced climbing guides with equipment",
        "Base camp and high camps setup with equipment",
        "Base camp support staff (cooks, kitchen helpers)",
        "All meals during the expedition",
        "One oxygen cylinder per climber with mask and regulator",
        "Medical supplies and emergency evacuation arrangement",
        "Satellite phone for emergency use",
        "Insurance for all Nepali staff"
      ],
      excludes: [
        "International airfare to and from Kathmandu",
        "Personal climbing gear and equipment",
        "Personal travel insurance (mandatory) and trip cancellation insurance",
        "Additional oxygen bottles beyond the included one",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and staff"
      ],
      firstAscent: {
        date: "October 27, 1992",
        team: "Akio Koizumi, Pasang Tshering Sherpa, and Pemba Sherpa",
        route: "Northwest Face"
      }
    }
  };
  
  export default mountainData;