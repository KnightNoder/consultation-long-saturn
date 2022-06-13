const getCategory = (choice) => {
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

const getProductId = (saturn_choice) => {
  // const hair_current_condition = window.localStorage.getItem(
  //   "hair_current_condition"
  // );
  // const past_allergy = window.localStorage.getItem("past_allergy");
  // const big_event_120_days = window.localStorage.getItem("big_event_120_days");
  // const age = window.localStorage.getItem("age");
  switch (saturn_choice.category) {
    // case "Hairfall":
    //   if (hair_current_condition == "Condition one") {
    //     return "";
    //   } else if (hair_current_condition == "Condition two") {
    //     return "6920580530340";
    //   } else if (
    //     (hair_current_condition == "Condition three" ||
    //       hair_current_condition == "Condition four") &&
    //     past_allergy == "no" &&
    //     parseInt(age) > 30
    //   ) {
    //     return "6920192950436";
    //   } else if (
    //     (hair_current_condition == "Condition three" ||
    //       hair_current_condition == "Condition four") &&
    //     (past_allergy == "yes" || big_event_120_days == "yes")
    //   ) {
    //     return "6920580530340";
    //   } else {
    //     return "6732124520612";
    //   }
    // case "Beard":
    //   const beard_stage = window.localStorage.getItem("beard_condition");
    //   if (
    //     beard_stage == "Patchy Beard" ||
    //     beard_stage == "No Beard growth" ||
    //     beard_stage == "Very less"
    //   )
    //     return "6980058677412";
    //   else return "6743341072548";
    case "weight-management":
      const weight = parseInt(saturn_choice.user_info.weight);
      const height = parseInt(saturn_choice.user_info.height);
      const BMI = (weight * 10000) / (height * height);
      if (BMI > 25) return ["7679735759070", "7634556059870"];
      else return ["7679735759070", "7634556059870"];
    // case "Performance":
    //   const erection_case = window.localStorage.getItem("erection_problem");
    //   const ejaculation_case = window.localStorage.getItem("ejaculation_case");
    //   const history_of_heart_issues = window.localStorage.getItem(
    //     "history_of_heart_issues"
    //   );
    //   if (
    //     (erection_case ==
    //       "Sometimes, I have issues with maintaining erection" ||
    //       erection_case ==
    //         "Most of the times, I have issues with getting & maintaining an erection") &&
    //     ejaculation_case == "Ejaculate too early during performance" &&
    //     history_of_heart_issues == "No"
    //   )
    //     return "5805028966564";
    // else if (
    //   (erection_case ==
    //     "Sometimes, I have issues with maintaining erection" ||
    //     erection_case ==
    //       "Most of the times, I have issues with getting & maintaining an erection") &&
    //   ejaculation_case == "Ejaculate too early during performance" &&
    //   history_of_heart_issues != "No"
    // )
    //   return "6734347174052";
    // else if (
    //   erection_case == "No issues in maintaining erection" &&
    //   ejaculation_case == "Ejaculate too early during performance"
    // )
    //   return "6734347174052";
    // else if (
    //   erection_case == "No issues in maintaining erection" &&
    //   history_of_heart_issues == "No"
    // )
    //   return "6718215651492";
    // else return "6734347174052";
    case "skin":
      const skin_concern = saturn_choice.skin.skin_concern;
      const skin_allergy_to = saturn_choice.skin.skin_allergy_to;
      if (skin_allergy_to == "None") {
        if (skin_concern == "Open pores")
          return ["7602721095902", "7658081157342"]; //GLOWSKINSERUM  - [1,2]
        if (skin_concern == "Pigmentation")
          return ["7602716573918", "7658065002718"]; // Alpha arbutin 6920580530340 - [3,4]
        if (skin_concern == "Active Acne")
          return ["7489917878494", "7489915977950"]; // Anti-acne gel [5,6]
        if (skin_concern == "Aging") return ["7602723160286", "7679711412446"]; //Anti-aging serum [7,8]
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
        if (skin_concern == "Aging") return ["7602723160286", "7489916829918"]; // Anti-aging serum [7,12]
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
        if (skin_concern == "Aging") return ["7602723160286", "7679711412446"]; // Happy skin kit [7,8]
        if (skin_concern == "Acne marks & spots")
          return ["7658065002718", "7658065002718"]; // 2% Alpha buretin [4,4]
        if (skin_concern == "Dark circles")
          return ["7602723160286", "7602712576222"]; // Glow skin  serum [7,9]
        if (skin_concern == "Dull Skin") return ["7602721095902", "10"]; // 3% Niacinamide face toner [1,10]
      } else if (skin_allergy_to == "Retinol") {
        if (skin_concern == "Open pores")
          return ["7602721095902", "7658081157342"]; // 3% Niacinamide face toner [1,2]
        if (skin_concern == "Pigmentation")
          return ["7602716573918", "7658065002718"]; // 2% Alpha buretin [3,4]
        if (skin_concern == "Active Acne")
          return ["7489917878494", "7489915977950"]; // Anti-acne gel [5,6]
        if (skin_concern == "Aging") return ["7658065002718", "7530240245982"]; // Anti-aging serum [4,11]
        if (skin_concern == "Dark circles") return ["7602716573918", ""]; // 2% Alpha buretin [3,]
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
        if (skin_concern == "Aging") return ["7602723160286", "7679711412446"]; // Anti-aging serum [7,8]
        if (skin_concern == "Dark circles")
          return ["7602723160286", "7602712576222"]; //Glowing skin combo [7,9]
        if (skin_concern == "Acne marks & spots")
          return ["7602721095902", "7489917550814"]; // Anti-acne gel [1,10]
        if (skin_concern == "Dull Skin")
          return ["7602721095902", "7530240245982"]; // 3% Niacinamide face toner [1,11]
      }
  }
};

const getSendMailData = (saturn_choice) => {
  const choice = saturn_choice.category;
  const keys = Object.keys(saturn_choice.weight_management.check_list);
  const filtered_string = keys.filter(function (key) {
    return saturn_choice.weight_management.check_list[key];
  });
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
      Height: saturn_choice.user_info.height,
      Weight: saturn_choice.user_info.weight,
      "How often do you eat meals in a day?":
        saturn_choice.weight_management.meals_a_day,
      "How many days do you exercise in a week?":
        saturn_choice.weight_management.exercise_a_week,
      "Do you have any pre-existing problems?": filtered_string.toString(),
    },
    skin: {
      "What are you concerned about?": saturn_choice.skin.skin_concern,
      // "Please select your skin texture": saturn_choice.skin.skin_texture,
      "Describe your skin type": saturn_choice.skin.skin_texture,
      "Are you allergic to any of the ingredients?":
        saturn_choice.skin.skin_allergy_to,
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

  const questionnaire = [];

  const testObj = {
    question: "",
    answer: "",
  };

  for (const key in stateObject[choice]) {
    questionnaire.push({
      question: key,
      answer: stateObject[choice][key],
    });
  }

  if (Object.keys(stateObject[choice].length == 3)) {
    questionnaire.push(testObj);
    questionnaire.push(testObj);
  }

  if (Object.keys(stateObject[choice].length == 4)) {
    questionnaire.push(testObj);
  }

  const data = JSON.stringify({
    firstName: saturn_choice.user_info.first_name,
    lastName: saturn_choice.user_info.last_name,
    age: saturn_choice.user_info.age,
    phone: saturn_choice.user_info.phone_number,
    email: saturn_choice.user_info.email,
    consultancy_type: saturn_choice.assessment_type,
    category: saturn_choice.category,
    booking: saturn_choice.appointment_type,
    image: "",
    type: "saturn",
    user_survey: questionnaire,
  });

  return data;
};
module.exports = { getCategory, getProductId, getSendMailData };
