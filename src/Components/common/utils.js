export const getCategory = (choice) => {
  switch (choice) {
    case "Hairfall":
      return "hair-1";
    case "Beard":
      return "beard";
    case "Skin":
      return "skin";
    case "Performance":
      return "performance";
    case "WeightLoss":
      return "weight-loss";
  }
};

export const getProductId = (
  saturn_long_choice,
  saturn_choice,
  assessment_type
) => {
  // const hair_current_condition = window.localStorage.getItem(
  //   "hair_current_condition"
  // );
  // const past_allergy = window.localStorage.getItem("past_allergy");
  // const big_event_120_days = window.localStorage.getItem("big_event_120_days");
  // const age = window.localStorage.getItem("age");
  if (assessment_type == "6 mins") {
    switch (saturn_long_choice.category) {
      case "weight-management":
        const weight = parseInt(saturn_long_choice.user_info.weight);
        const height = parseInt(saturn_long_choice.user_info.height);
        const BMI = (weight * 10000) / (height * height);
        if (BMI > 25) return ["7679735759070", "7634556059870"];
        else return ["7679735759070", "7634556059870"];
      case "skin":
        const skin_concern = saturn_long_choice.skin.skin_concern;
        const skin_allergy_to = saturn_long_choice.skin.skin_allergy_to;
        if (skin_allergy_to == "None") {
          if (skin_concern == "Open pores")
            return ["7602721095902", "7658081157342"]; //GLOWSKINSERUM  - [1,2]
          if (skin_concern == "Pigmentation")
            return ["7602716573918", "7658065002718"]; // Alpha arbutin 6920580530340 - [3,4]
          if (skin_concern == "Active Acne")
            return ["7489917878494", "7489915977950"]; // Anti-acne gel [5,6]
          if (skin_concern == "Aging")
            return ["7602723160286", "7679711412446"]; //Anti-aging serum [7,8]
          if (skin_concern == "Dark circles")
            return ["7602723160286", "7602712576222"]; //GLOWSKINSERUM [7,9]
          if (skin_concern == "Acne marks & spots")
            return ["7602716573918", "7489917550814"]; //Acne removal kit [3,10]
          if (skin_concern == "Dull Skin")
            return ["7602721095902", "7530240245982"]; //GLOWSKINSERUM [1,11]
        } else if (skin_allergy_to == "Vitamin C") {
          if (skin_concern == "Open pores")
            return ["7658081157342", "7658081157342"]; // Foam face wash and toner [2,2]
          if (skin_concern == "Pigmentation")
            return ["7602716573918", "7658065002718"]; // 2% Alpha buretin [3,4]
          if (skin_concern == "Active Acne")
            return ["7489917878494", "7489915977950"]; // Anti-acne gel [5,6]
          if (skin_concern == "Aging")
            return ["7602723160286", "7489916829918"]; // Anti-aging serum [7,12]
          if (skin_concern == "Dark circles")
            return ["7602723160286", "7602712576222"]; // 2% Alpha buretin [7,9]
          if (skin_concern == "Acne marks & spots")
            return ["7602716573918", "7489917550814"]; // Anti-acne gel [3,10]
          if (skin_concern == "Dull Skin")
            return ["7658081157342", "7530237690078"]; // 3% Niacinamide face toner [2,14]
        } else if (skin_allergy_to == "Salicylic Acid") {
          //Salicylic Acid
          if (skin_concern == "Open pores")
            return ["7602721095902", "7658081157342"]; // 3% Niacinamide face toner [1,2]
          if (skin_concern == "Pigmentation")
            return ["7602716573918", "7658065002718"]; // 2% Alpha buretin [3,4]
          if (skin_concern == "Active Acne")
            return ["7658081157342", "7658081157342"]; // 2% Alpha buretin [2,2]
          if (skin_concern == "Aging")
            return ["7602723160286", "7679711412446"]; // Happy skin kit [7,8]
          if (skin_concern == "Acne marks & spots")
            return ["7658065002718", "7658065002718"]; // 2% Alpha buretin [4,4]
          if (skin_concern == "Dark circles")
            return ["7602723160286", "7602712576222"]; // Glow skin  serum [7,9]
          if (skin_concern == "Dull Skin")
            return ["7602721095902", "7489917550814"]; // 3% Niacinamide face toner [1,10]
        } else if (skin_allergy_to == "Retinol") {
          if (skin_concern == "Open pores")
            return ["7602721095902", "7658081157342"]; // 3% Niacinamide face toner [1,2]
          if (skin_concern == "Pigmentation")
            return ["7602716573918", "7658065002718"]; // 2% Alpha buretin [3,4]
          if (skin_concern == "Active Acne")
            return ["7489917878494", "7489915977950"]; // Anti-acne gel [5,6]
          if (skin_concern == "Aging")
            return ["7658065002718", "7530240245982"]; // Anti-aging serum [4,11]
          if (skin_concern == "Dark circles")
            return ["7602716573918", "7530241163486"]; // 2% Alpha buretin [3,]
          if (skin_concern == "Acne marks & spots")
            return ["7602716573918", "7489917550814"]; // Anti-acne gel [3,10]
          if (skin_concern == "Dull Skin")
            return ["7602721095902", "7530240245982"]; // Foam face wash and toner [1,11]
        } else if (skin_allergy_to == "Niacinamide") {
          if (skin_concern == "Open pores") return "7489916829918"; // Stay young kit
          if (skin_concern == "Pigmentation") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Active Acne") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Aging") return "7451592523998"; // Anti-aging serum
          if (skin_concern == "Dark circles") return "7530240245982"; // Gloww Skin Serum, Jade Roller and Gua sha
          if (skin_concern == "Acne marks & spots") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Dull Skin") return "7530240245982"; // Gloww Skin Serum, Jade Roller and Gua sha
        } else if (skin_allergy_to == "Kojic Acid") {
          if (skin_concern == "Open pores")
            return ["7602721095902", "7658081157342"]; // 3% Niacinamide face toner [1,2]
          if (skin_concern == "Pigmentation")
            return ["7489916272862", "7658089087198"]; // 2% Alpha buretin [13,]
          if (skin_concern == "Active Acne")
            return ["7489917878494", "7489917550814"]; // Clear facial kit [5,10]
          if (skin_concern == "Aging")
            return ["7602723160286", "7679711412446"]; // Anti-aging serum [7,8]
          if (skin_concern == "Dark circles")
            return ["7602723160286", "7602712576222"]; //Glowing skin combo [7,9]
          if (skin_concern == "Acne marks & spots")
            return ["7602721095902", "7489917550814"]; // Anti-acne gel [1,10]
          if (skin_concern == "Dull Skin")
            return ["7602721095902", "7530240245982"]; // 3% Niacinamide face toner [1,11]
        }
    }
  } else {
    switch (saturn_choice.category) {
      case "weight-management":
        const weight = parseInt(saturn_choice.user_info.weight);
        const height = parseInt(saturn_choice.user_info.height);
        const BMI = (weight * 10000) / (height * height);
        if (BMI > 25) return "7630401143006";
        else if (BMI > 22 && BMI <= 25) return "7619064365278";
        else return "7634556059870";
      case "skin":
        const skin_concern = saturn_choice.skin.skin_concern;
        const skin_allergy_to = saturn_choice.skin.skin_allergy_to;
        if (skin_allergy_to == "None") {
          if (skin_concern == "Open pores") return "7451594588382"; //GLOWSKINSERUM
          if (skin_concern == "Pigmentation") return "7451594588382"; // Alpha arbutin 6920580530340
          if (skin_concern == "Active Acne") return "7451593769182"; // Anti-acne gel
          if (skin_concern == "Aging") return "7530239721694"; //Anti-aging serum
          if (skin_concern == "Dark circles") return "7451594588382"; //GLOWSKINSERUM
          if (skin_concern == "Acne marks & spots") return "7451594588382"; //Acne removal kit
          if (skin_concern == "Dull Skin") return "7451594588382"; //GLOWSKINSERUM
        } else if (skin_allergy_to == "Vitamin C") {
          if (skin_concern == "Open pores") return "7658081157342"; // Foam face wash and toner
          if (skin_concern == "Pigmentation") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Active Acne") return "7451593769182"; // Anti-acne gel
          if (skin_concern == "Aging") return "7451592523998"; // Anti-aging serum
          if (skin_concern == "Dark circles") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Acne marks & spots") return "7451593769182"; // Anti-acne gel
          if (skin_concern == "Dull Skin") return "7451598356702"; // 3% Niacinamide face toner
        } else if (skin_allergy_to == "Salicylic Acid") {
          //Salicylic Acid
          if (skin_concern == "Open pores") return "7451598356702"; // 3% Niacinamide face toner
          if (skin_concern == "Pigmentation") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Active Acne") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Aging") return "7489916272862"; // Happy skin kit
          if (skin_concern == "Acne marks & spots") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Dark circles") return "7451594588382"; // Glow skin  serum
          if (skin_concern == "Dull Skin") return "7451598356702"; // 3% Niacinamide face toner
        } else if (skin_allergy_to == "Retinol") {
          if (skin_concern == "Open pores") return "7451598356702"; // 3% Niacinamide face toner
          if (skin_concern == "Pigmentation") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Active Acne") return "7451593769182"; // Anti-acne gel
          if (skin_concern == "Aging") return "7451592523998"; // Anti-aging serum
          if (skin_concern == "Dark circles") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Acne marks & spots") return "7451593769182"; // Anti-acne gel
          if (skin_concern == "Dull Skin") return "7658081157342"; // Foam face wash and toner
        } else if (skin_allergy_to == "Niacinamide") {
          if (skin_concern == "Open pores") return "7489916829918"; // Stay young kit
          if (skin_concern == "Pigmentation") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Active Acne") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Aging") return "7451592523998"; // Anti-aging serum
          if (skin_concern == "Dark circles") return "7530240245982"; // Gloww Skin Serum, Jade Roller and Gua sha
          if (skin_concern == "Acne marks & spots") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Dull Skin") return "7530240245982"; // Gloww Skin Serum, Jade Roller and Gua sha
        } else if (skin_allergy_to == "Kojic Acid") {
          if (skin_concern == "Open pores") return "7451598356702"; // 3% Niacinamide face toner
          if (skin_concern == "Pigmentation") return "7463330709726"; // 2% Alpha buretin
          if (skin_concern == "Active Acne") return "7489915977950"; // Clear facial kit
          if (skin_concern == "Aging") return "7451592523998"; // Anti-aging serum
          if (skin_concern == "Dark circles") return "7530240245982"; //Glowing skin combo
          if (skin_concern == "Acne marks & spots") return "7451593769182"; // Anti-acne gel
          if (skin_concern == "Dull Skin") return "7451598356702"; // 3% Niacinamide face toner
        }
    }
  }
};

export const getSendMailData = (
  saturn_long_choice,
  assessment_type,
  saturn_choice
) => {
  if (assessment_type == "6 mins") {
    var choice = saturn_long_choice.category;
    // var keys = Object.keys(saturn_long_choice.weight_management.check_list);

    // var filtered_string = keys.filter(function (key) {
    //   return saturn_long_choice.weight_management.check_list[key];
    // });

    var keys2 = Object.keys(saturn_long_choice.skin.health_issues);

    var filtered_string2 = keys2.filter(function (key) {
      console.log(saturn_long_choice.skin.health_issues[key], "key value");
      return saturn_long_choice.skin.health_issues[key];
    });
  } else {
    var choice = saturn_choice.category;
    var keys = Object.keys(saturn_choice.weight_management.check_list);

    var filtered_string = keys.filter(function (key) {
      return saturn_choice.weight_management.check_list[key];
    });

    // var keys2 = Object.keys(saturn_choice.skin.health_issues);

    // var filtered_string2 = keys2.filter(function (key) {
    //   console.log(saturn_choice.skin.health_issues[key], "key value");
    //   return saturn_choice.skin.health_issues[key];
    // });
    // console.log(filtered_string2, "string of health issues");
  }

  if (assessment_type == "6 mins") {
    var stateObject = {
      // Hairfall: {
      //   "What is the current condition of your hair and scalp?":
      //     window.localStorage.getItem("hair_current_condition"),
      //   "Does anyone in your family have hair loss?":
      //     window.localStorage.getItem("family_hair_loss"),
      //   "Do you have any past allergic reactions to medicines?":
      //     window.localStorage.getItem("past_allergy"),
      //   "Do you have any big events coming up in next 120 days?":
      //     window.localStorage.getItem("big_event_120_days"),
      // },
      // Beard: {
      //   "Choose a condition that best describes your beard":
      //     window.localStorage.getItem("beard_condition"),
      //   "What exactly are you looking for?":
      //     window.localStorage.getItem("looking_for"),
      //   "How do you trim your beard?": window.localStorage.getItem("trim_beard"),
      //   "Does anyone in your family have beard growth issues?":
      //     window.localStorage.getItem("family_beard_growth_issues"),
      // },
      "weight-management": {
        Height: saturn_long_choice.user_info.height,
        Weight: saturn_long_choice.user_info.weight,
        "How many times do you eat in a day??":
          saturn_long_choice.weight_management.meals_a_day,
        "How many days do you exercise?":
          saturn_long_choice.weight_management.exercise_a_week,
        "How many hours do you work in a day?":
          saturn_long_choice.weight_management.work_style,
        "Have you used weight management products before?":
          saturn_long_choice.weight_management.past_allergy,
        "How often do you eat out?":
          saturn_long_choice.weight_management.food_preference,
        "How many litres of water do you drink per day?":
          saturn_long_choice.weight_management.water_intake,
        "How often do you smoke or drink?":
          saturn_long_choice.weight_management.smoke_drink,
        "How many hours do you sleep?":
          saturn_long_choice.weight_management.sleeping_pattern,
        "How often do you have junk food?":
          saturn_long_choice.weight_management.food_type,
        "Have you used weight management products before?":
          saturn_long_choice.weight_management.weight_management_products,
        "Is anyone in your family overweight/Obese?":
          saturn_long_choice.weight_management.overweight,
        "Since when did you observe you are not in control of your weight?":
          saturn_long_choice.weight_management.not_in_control,
      },
      skin: {
        "What are you concerned about?": saturn_long_choice.skin.skin_concern,
        // "Please select your skin texture": saturn_long_choice.skin.skin_texture,
        "Describe your skin type": saturn_long_choice.skin.skin_texture,
        "Are you allergic to any of the ingredients?":
          saturn_long_choice.skin.skin_allergy_to,
        "Where are the wrinkles on your skin?":
          saturn_long_choice.skin.wrinkles_location,
        "Which type of food do you mostly consume?":
          saturn_long_choice.skin.food_type,
        "Do you smoke or drink?": saturn_long_choice.skin.smoke_drink,
        "Do you have acne scars or spots?": saturn_long_choice.skin.acne_scars,
        "Do you have blackheads/ whiteheads on your skin?":
          saturn_long_choice.skin.blackheads_whiteheads,
        "How about your work style?": saturn_long_choice.skin.work_style,
        "May I know your water intake per day in litres?":
          saturn_long_choice.skin.water_intake,
        "What are you concerned about?": saturn_long_choice.skin.skin_concern,
        "Explain your wrinkles/ ageing pattern?":
          saturn_long_choice.skin.ageing_pattern,
        "Do you have any pre-existing problems?": filtered_string2.toString(),
        "Do you have active pimples/pitted Acne?":
          saturn_long_choice.skin.pimples_acne,
        "Are you allergic to any of the ingredients?":
          saturn_long_choice.skin.skin_allergy_to,
        "Which type of food do you prefer?":
          saturn_long_choice.skin.food_preference,
        "May I know your sleeping pattern?":
          saturn_long_choice.skin.sleeping_pattern,
        "What is the frequency of your acne?": saturn_long_choice.skin.acne,
        "What type of diet do you follow?":
          saturn_long_choice.skin.eating_culture,
        "Describe your skin type": saturn_long_choice.skin.skin_texture,
        "Did you use any skin products before and were allergic to them?":
          saturn_long_choice.skin.skin_products,
      },
      // Performance: {
      //   "How is your sexual drive over the last one year?":
      //     window.localStorage.getItem("sexual_drive_over_a_year"),
      //   "Do you have a problem getting or maintaining an erection during sex?":
      //     window.localStorage.getItem("erection_problem"),
      //   "Which of the following is the case with you?":
      //     window.localStorage.getItem("ejaculation_case"),
      //   "Do you have any existing or any history of Heart issues?":
      //     window.localStorage.getItem("history_of_heart_issues"),
      //   "Do you experience any cramps or tiredness while performing?":
      //     window.localStorage.getItem("cramps_tiredness"),
      // },
    };
  } else {
    var stateObject = {
      "weight-management": {
        "How often do you eat meals in a day?":
          saturn_choice.weight_management.meals_a_day,
        "How many days do you exercise in a week?":
          saturn_choice.weight_management.exercise_a_week,
        "Do you have any pre-existing problems?": filtered_string.toString(),
      },
      skin: {
        "What are you concerned about?": saturn_choice.skin.skin_concern,
        "Describe your skin type": saturn_choice.skin.skin_texture,
        "Are you allergic to any of the ingredients?":
          saturn_choice.skin.skin_allergy_to,
      },
    };
  }

  console.log(stateObject[choice], "state obj");

  const questionnaire = [];

  const testObj = {
    question: "",
    answer: "",
  };

  // var i = 0;
  for (const key in stateObject[choice]) {
    // var question_number = "question" + i;
    // var answer_number = "answer" + i;
    questionnaire.push({
      // [question_number]: key,
      // [answer_number]: stateObject[choice][key],
      question: key,
      answer: stateObject[choice][key],
    });
    // i++;
  }

  // var i = 0;
  // for (let key in questionnaire) {
  //   questionnaire[key] = "question" + i;
  //   i++;
  //   console.log(key, "key after");
  //   console.log(questionnaire, "qs bef");
  // }

  // while (Object.keys(questionnaire).length != 20) {
  //   // var question_number = "question" + i;
  //   // var answer_number = "answer" + i;
  //   questionnaire.push({
  //       question: "",
  //       answer: "",
  //   });
  //   // i++;
  // }

  const data = JSON.stringify({
    firstName:
      assessment_type == "6 mins"
        ? saturn_long_choice.user_info.first_name
        : saturn_choice.user_info.first_name,
    lastName:
      assessment_type == "6 mins"
        ? saturn_long_choice.user_info.last_name
        : saturn_choice.user_info.last_name,
    age:
      assessment_type == "6 mins"
        ? saturn_long_choice.user_info.age
        : saturn_choice.user_info.age,
    phone:
      assessment_type == "6 mins"
        ? saturn_long_choice.user_info.phone_number
        : saturn_choice.user_info.phone_number,
    email:
      assessment_type == "6 mins"
        ? saturn_long_choice.user_info.email
        : saturn_choice.user_info.email,
    consultation_type: assessment_type,
    category:
      assessment_type == "6 mins"
        ? saturn_long_choice.category
        : saturn_choice.category,
    booking:
      assessment_type == "6 mins"
        ? saturn_long_choice.appointment_type
        : saturn_choice.appointment_type,
    image: "",
    type: "saturn",
    user_survey: questionnaire,
  });
  return data;
};

// module.exports = { getCategory, getProductId, getSendMailData };
