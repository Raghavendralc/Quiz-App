// utils/quizData.js
export const fetchQuizData = async () => {
  const currentDateTime = new Date().toISOString();
  const currentUser = "TeAcHaCk";

  // This is the actual data structure from your API
  const apiQuizData = {
    "id": 60,
    "name": currentUser,
    "title": "Genetics and Evolution",
    "description": "",
    "difficulty_level": null,
    "topic": "The Molecular Basis of Inheritance",
    "time": "2024-07-15T00:00:00.000+05:30",
    "is_published": true,
    "created_at": currentDateTime,
    "updated_at": currentDateTime,
    "duration": 15,
    "end_time": "2024-07-16T00:00:00.000+05:30",
    "negative_marks": "1.0",
    "correct_answer_marks": "4.0",
    "shuffle": true,
    "show_answers": true,
    "lock_solutions": false,
    "is_form": false,
    "show_mastery_option": false,
    "reading_material": null,
    "quiz_type": null,
    "is_custom": false,
    "banner_id": null,
    "exam_id": null,
    "show_unanswered": false,
    "ends_at": "2025-01-18",
    "lives": null,
    "live_count": "Free Test",
    "coin_count": -1,
    "questions_count": 10,
    "daily_date": "January 17, 2025",
    "max_mistake_count": 9,
    "reading_materials": [],
    "questions": [
      {
        "id": 3342,
        "description": "If the base sequence in DNA is 5' AAAT 3' then the base sequence in mRNA is :",
        "difficulty_level": null,
        "topic": "Molecular Basis Of Inheritance ",
        "is_published": true,
        "created_at": currentDateTime,
        "updated_at": currentDateTime,
        "detailed_solution": "To determine the mRNA sequence from the given DNA sequence, we follow the principles of transcription, where RNA is synthesized complementary to the DNA template strand. Here's the step-by-step process:\r\n\r\nGiven DNA Sequence:\r\n5\r\n′\r\n \r\n𝐴\r\n𝐴\r\n𝐴\r\n𝑇\r\n \r\n3\r\n′\r\n5 \r\n′\r\n AAAT3 \r\n′\r\n \r\nTranscription Rules:\r\nComplementary Base Pairing:\r\n\r\nAdenine (A) in DNA pairs with Uracil (U) in RNA.\r\nThymine (T) in DNA pairs with Adenine (A) in RNA.\r\nCytosine (C) pairs with Guanine (G), and vice versa.\r\nRNA is synthesized in the 5' to 3' direction, complementary to the 3' to 5' DNA template strand.\r\n\r\nDNA Template Strand:\r\nTo determine the template strand, we first identify the complementary strand of the given DNA sequence. The template strand is:\r\n\r\n3\r\n′\r\n \r\n𝑇\r\n𝑇\r\n𝑇\r\n𝐴\r\n \r\n5\r\n′\r\n3 \r\n′\r\n TTTA5 \r\n′\r\n \r\nmRNA Sequence:\r\nThe mRNA is transcribed from the template strand using complementary base pairing:\r\n\r\n5\r\n′\r\n \r\n𝐴\r\n𝐴\r\n𝐴\r\n𝑈\r\n \r\n3\r\n′\r\n5 \r\n′\r\n AAAU3 \r\n′\r\n \r\nFinal Answer:\r\nThe base sequence in mRNA is: 5' AAAU 3'.",
        "options": [
          {
            "id": 13379,
            "description": "5'UUUU3'",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13380,
            "description": "3'UUUU5'",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13381,
            "description": "5'AAAU3'",
            "is_correct": true,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13382,
            "description": "3'AAAU5'",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          }
        ]
      },
      {
        "id": 3315,
        "description": "Avery, MacLeod and Mc Carty used the S(virulent) and R (avirulent) strains of streptococcus pneumoniae. They isolated and purified protein, DNA, RNA from the bacteria and treated them with related enzymes. They concluded that :",
        "difficulty_level": null,
        "topic": "Molecular Basis Of Inheritance ",
        "is_published": true,
        "created_at": currentDateTime,
        "updated_at": currentDateTime,
        "detailed_solution": "**Explanation:**\n\n* Transformation is a process by which genetic material is transferred from one organism to another.\n* In the Griffith's experiment, heat-killed S (virulent) strain of Streptococcus pneumoniae transformed the R (avirulent) strain into the S strain.\n* Avery, MacLeod, and McCarty conducted experiments to identify the transforming agent.\n* They treated the heated S strain bacteria with enzymes that break down proteins, DNA, and RNA.\n* Only the enzyme that broke down DNA inactivated the transforming agent.\n* This experiment demonstrated that DNA was the transforming agent, responsible for transferring the genetic information that allowed the R strain to become virulent.",
        "options": [
          {
            "id": 13271,
            "description": "DNA was transforming agent",
            "is_correct": true,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13272,
            "description": "RNA was transforming agent",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13273,
            "description": "Protein was transforming agent",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13274,
            "description": "All are correct",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          }
        ]
      },
      // Adding more questions from your API data
      {
        "id": 3343,
        "description": "Which organelle is known as the powerhouse of the cell?",
        "difficulty_level": null,
        "topic": "Cell Biology",
        "is_published": true,
        "created_at": currentDateTime,
        "updated_at": currentDateTime,
        "detailed_solution": "The mitochondrion is called the powerhouse of the cell because it produces most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy.",
        "options": [
          {
            "id": 13383,
            "description": "Nucleus",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13384,
            "description": "Mitochondria",
            "is_correct": true,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13385,
            "description": "Golgi apparatus",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          },
          {
            "id": 13386,
            "description": "Endoplasmic reticulum",
            "is_correct": false,
            "unanswered": false,
            "photo_url": null
          }
        ]
      },
      // Add more questions as needed
    ]
  };

  try {
    const response = await fetch('https://api.jsonserve.com/Uw5CrX', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add CORS headers
        'Access-Control-Allow-Origin': '*'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('API call failed, using stored quiz data');
    
    // If shuffle is true, randomize the questions
    if (apiQuizData.shuffle) {
      apiQuizData.questions = apiQuizData.questions.sort(() => Math.random() - 0.5);
    }

    return apiQuizData;
  }
};