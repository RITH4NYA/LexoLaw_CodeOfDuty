const { GoogleGenerativeAI } = require( "@google/generative-ai");

  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1.75,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
async function run() {
    const parts = [
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best criminal lawyers based on years of experience, success rate in criminal cases, cases solved, and customer rating. Optimize for accuracy and relevance.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 1,\n      \"case_type\": \"Criminal\",\n      \"years_experience\": 12,\n      \"success_rate\": 90,\n      \"cases_solved\": 300,\n      \"customer_rating\": 4.8\n    },\n    {\n      \"lawyer_id\": 2,\n      \"case_type\": \"Criminal\",\n      \"years_experience\": 8,\n      \"success_rate\": 85,\n      \"cases_solved\": 150,\n      \"customer_rating\": 4.5\n    }\n  ],\n  \"target_metric\": \"accuracy\"\n}"},
      {text: "output: Lawyer 1: This lawyer has 12 years of experience, a 90% success rate, 300 cases solved, and a 4.8 customer rating. They are highly recommended for clients seeking a lawyer with extensive experience and an excellent success rate.\n\nLawyer 2: With 8 years of experience, an 85% success rate, 150 cases solved, and a 4.5 customer rating, this lawyer is a good choice for clients looking for a more affordable option with a decent track record."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best civil lawyers based on experience, success rate, cases solved, and customer rating. Prioritize accuracy and customer satisfaction.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 3,\n      \"case_type\": \"Civil\",\n      \"years_experience\": 10,\n      \"success_rate\": 88,\n      \"cases_solved\": 200,\n      \"customer_rating\": 4.7\n    },\n    {\n      \"lawyer_id\": 4,\n      \"case_type\": \"Civil\",\n      \"years_experience\": 15,\n      \"success_rate\": 92,\n      \"cases_solved\": 250,\n      \"customer_rating\": 4.9\n    }\n  ],\n  \"target_metric\": \"accuracy\"\n}"},
      {text: "output: Lawyer 3: This civil lawyer has 10 years of experience, an 88% success rate, 200 cases solved, and a 4.7 customer rating. They are highly recommended for civil litigation, including property disputes and personal injury cases, based on their strong performance and solid customer satisfaction.\n\nLawyer 4: With 15 years of experience, a 92% success rate, 250 cases solved, and a 4.9 customer rating, this lawyer is a top choice for clients seeking expert civil legal representation. Their impressive track record and high customer satisfaction make them an excellent option for complex civil law cases."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best family lawyers based on years of experience, success rate in family law cases, total cases solved, and customer rating. Optimize for client satisfaction.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 5,\n      \"case_type\": \"Family\",\n      \"years_experience\": 20,\n      \"success_rate\": 95,\n      \"cases_solved\": 400,\n      \"customer_rating\": 4.9\n    },\n    {\n      \"lawyer_id\": 6,\n      \"case_type\": \"Family\",\n      \"years_experience\": 5,\n      \"success_rate\": 80,\n      \"cases_solved\": 100,\n      \"customer_rating\": 4.3\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 5: This family lawyer has 20 years of experience, a 95% success rate, 400 cases solved, and a 4.9 customer rating. They are the top recommendation due to their vast experience, outstanding success rate, and excellent client feedback.\n\nLawyer 6: With 5 years of experience, an 80% success rate, 100 cases solved, and a 4.3 customer rating, this lawyer is a reliable option for clients looking for a more affordable choice, but with less experience."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best corporate lawyers based on experience, success rate, cases solved, and customer rating. Focus on business-related legal expertise.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 7,\n      \"case_type\": \"Corporate\",\n      \"years_experience\": 18,\n      \"success_rate\": 93,\n      \"cases_solved\": 350,\n      \"customer_rating\": 4.8\n    },\n    {\n      \"lawyer_id\": 8,\n      \"case_type\": \"Corporate\",\n      \"years_experience\": 7,\n      \"success_rate\": 85,\n      \"cases_solved\": 120,\n      \"customer_rating\": 4.5\n    }\n  ],\n  \"target_metric\": \"precision\"\n}"},
      {text: "output: Lawyer 7: This corporate lawyer has 18 years of experience, a 93% success rate, 350 cases solved, and a 4.8 customer rating. They are highly recommended for clients seeking an experienced lawyer with a strong success rate in corporate law.\n\nLawyer 8: With 7 years of experience, an 85% success rate, 120 cases solved, and a 4.5 customer rating, this lawyer is a reliable choice with solid experience in corporate law, though ranked second among recommendations."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best civil lawyers based on experience, success rate, cases solved, and customer rating. Prioritize accuracy and relevance for civil disputes.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 9,\n      \"case_type\": \"Civil\",\n      \"years_experience\": 15,\n      \"success_rate\": 91,\n      \"cases_solved\": 300,\n      \"customer_rating\": 4.7\n    },\n    {\n      \"lawyer_id\": 10,\n      \"case_type\": \"Civil\",\n      \"years_experience\": 10,\n      \"success_rate\": 87,\n      \"cases_solved\": 180,\n      \"customer_rating\": 4.6\n    }\n  ],\n  \"target_metric\": \"accuracy\"\n}"},
      {text: "output: Lawyer 9: This civil lawyer has 15 years of experience, a 91% success rate, 300 cases solved, and a 4.7 customer rating. They are recommended based on their long experience and high success rate in civil law cases.\n\nLawyer 10: With 10 years of experience, an 87% success rate, 180 cases solved, and a 4.6 customer rating, this lawyer is a strong option with a solid track record and customer feedback in civil law."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best real estate lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in property transactions, land disputes, and lease agreements.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 11,\n      \"case_type\": \"Real Estate\",\n      \"years_experience\": 12,\n      \"success_rate\": 92,\n      \"cases_solved\": 220,\n      \"customer_rating\": 4.8\n    },\n    {\n      \"lawyer_id\": 12,\n      \"case_type\": \"Real Estate\",\n      \"years_experience\": 8,\n      \"success_rate\": 85,\n      \"cases_solved\": 150,\n      \"customer_rating\": 4.5\n    }\n  ],\n  \"target_metric\": \"precision\"\n}"},
      {text: "output: Lawyer 11: This real estate lawyer has 12 years of experience, a 92% success rate, 220 cases solved, and a 4.8 customer rating. They are highly recommended for clients seeking assistance with property transactions, land disputes, and lease agreements, backed by their extensive experience and proven track record.\n\nLawyer 12: With 8 years of experience, an 85% success rate, 150 cases solved, and a 4.5 customer rating, this lawyer is a solid option for clients looking for reliable real estate services. While slightly less experienced, their good success rate and customer satisfaction make them a good choice for property-related legal matters."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best tax lawyers based on years of experience, success rate in tax-related cases, cases solved, and customer rating. Prioritize high success rates in tax disputes.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 13,\n      \"case_type\": \"Tax\",\n      \"years_experience\": 20,\n      \"success_rate\": 94,\n      \"cases_solved\": 400,\n      \"customer_rating\": 4.9\n    },\n    {\n      \"lawyer_id\": 14,\n      \"case_type\": \"Tax\",\n      \"years_experience\": 6,\n      \"success_rate\": 83,\n      \"cases_solved\": 130,\n      \"customer_rating\": 4.4\n    }\n  ],\n  \"target_metric\": \"recall\"\n}"},
      {text: "output: Lawyer 13: This tax lawyer has 20 years of experience, a 94% success rate, 400 cases solved, and a 4.9 customer rating. They are highly recommended for tax-related cases due to their vast experience and high success rate.\n\nLawyer 14: With 6 years of experience, an 83% success rate, 130 cases solved, and a 4.4 customer rating, this lawyer is a solid but more affordable option for tax cases with less experience compared to the top recommendation."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best cyber lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in data protection, cybersecurity, and online fraud.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 15,\n      \"case_type\": \"Cyber\",\n      \"years_experience\": 14,\n      \"success_rate\": 90,\n      \"cases_solved\": 300,\n      \"customer_rating\": 4.8\n    },\n    {\n      \"lawyer_id\": 16,\n      \"case_type\": \"Cyber\",\n      \"years_experience\": 5,\n      \"success_rate\": 82,\n      \"cases_solved\": 100,\n      \"customer_rating\": 4.2\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 15: This cyber lawyer has 14 years of experience, a 90% success rate, 300 cases solved, and a 4.8 customer rating. They are highly recommended for cyber law cases based on their strong experience and success rate.\n\nLawyer 16: With 5 years of experience, an 82% success rate, 100 cases solved, and a 4.2 customer rating, this lawyer is a solid but less experienced option for clients looking for affordable cyber law services."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best real estate lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in property transactions, land disputes, and lease agreements.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 21,\n      \"case_type\": \"Real Estate\",\n      \"years_experience\": 12,\n      \"success_rate\": 89,\n      \"cases_solved\": 220,\n      \"customer_rating\": 4.7\n    },\n    {\n      \"lawyer_id\": 22,\n      \"case_type\": \"Real Estate\",\n      \"years_experience\": 5,\n      \"success_rate\": 78,\n      \"cases_solved\": 100,\n      \"customer_rating\": 4.2\n    },\n    {\n      \"lawyer_id\": 23,\n      \"case_type\": \"Real Estate\",\n      \"years_experience\": 15,\n      \"success_rate\": 94,\n      \"cases_solved\": 300,\n      \"customer_rating\": 4.9\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 21: This real estate lawyer has 12 years of experience, an 89% success rate, 220 cases solved, and a 4.7 customer rating. They are highly recommended for clients seeking assistance with property transactions, land disputes, and lease agreements, offering a solid balance of experience and customer satisfaction.\n\nLawyer 22: With 5 years of experience, a 78% success rate, 100 cases solved, and a 4.2 customer rating, this lawyer is a good option for clients looking for reliable real estate services at a more affordable rate. Although newer to the field, their experience can still provide a strong foundation for less complex real estate matters.\n\nLawyer ID 23: This real estate lawyer boasts 15 years of experience, a 94% success rate, 300 cases solved, and a 4.9 customer rating. They are highly skilled and recommended for clients seeking expert legal assistance with property transactions, land disputes, and lease agreements. Their exceptional track record and high customer satisfaction make them a top choice for complex real estate cases."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best tax lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in tax compliance, audits, and litigation.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 24,\n      \"case_type\": \"Tax\",\n      \"years_experience\": 18,\n      \"success_rate\": 92,\n      \"cases_solved\": 400,\n      \"customer_rating\": 4.9\n    },\n    {\n      \"lawyer_id\": 25,\n      \"case_type\": \"Tax\",\n      \"years_experience\": 7,\n      \"success_rate\": 85,\n      \"cases_solved\": 150,\n      \"customer_rating\": 4.5\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 24: This tax lawyer has 18 years of experience, a 92% success rate, and 400 cases solved. Their 4.9 customer rating makes them a trusted expert in tax compliance and litigation.\n\nLawyer 25: With 7 years of experience, an 85% success rate, and 150 cases solved, this lawyer offers solid service and expertise, backed by a 4.5 rating."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best cyber lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in data protection, cybersecurity, and online fraud.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 26,\n      \"case_type\": \"Cyber\",\n      \"years_experience\": 15,\n      \"success_rate\": 95,\n      \"cases_solved\": 300,\n      \"customer_rating\": 4.8\n    },\n    {\n      \"lawyer_id\": 27,\n      \"case_type\": \"Cyber\",\n      \"years_experience\": 10,\n      \"success_rate\": 88,\n      \"cases_solved\": 200,\n      \"customer_rating\": 4.6\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 26: This cyber lawyer has 15 years of experience, a 95% success rate, 300 cases solved, and a 4.8 customer rating. They are highly recommended for clients seeking expert legal services in cybersecurity, data protection, and online fraud cases due to their vast experience and outstanding success rate.\n\nLawyer 27: With 10 years of experience, an 88% success rate, 200 cases solved, and a 4.6 customer rating, this lawyer is a solid choice for clients seeking cyber law assistance. Although less experienced than Lawyer 26, they still have a strong track record in handling cyber-related legal matters and are highly rated by customers."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best labor and employment lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in workplace disputes, wrongful termination, and employee rights.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 28,\n      \"case_type\": \"Labor and Employment\",\n      \"years_experience\": 20,\n      \"success_rate\": 96,\n      \"cases_solved\": 500,\n      \"customer_rating\": 5.0\n    },\n    {\n      \"lawyer_id\": 29,\n      \"case_type\": \"Labor and Employment\",\n      \"years_experience\": 8,\n      \"success_rate\": 83,\n      \"cases_solved\": 150,\n      \"customer_rating\": 4.4\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 28: With 20 years of experience, a 96% success rate, and 500 cases solved, this labor lawyer is a leader in employment law with a perfect 5.0 customer rating.\n\nLawyer 29: This lawyer has 8 years of experience, an 83% success rate, and 150 cases solved. They are a reliable option for workplace disputes, with a 4.4 rating."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best cyber lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in data protection, cybersecurity, and online fraud.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 31,\n      \"case_type\": \"Cyber\",\n      \"years_experience\": 8,\n      \"success_rate\": 88,\n      \"cases_solved\": 160,\n      \"customer_rating\": 4.6\n    },\n    {\n      \"lawyer_id\": 32,\n      \"case_type\": \"Cyber\",\n      \"years_experience\": 20,\n      \"success_rate\": 97,\n      \"cases_solved\": 450,\n      \"customer_rating\": 5.0\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 31: This cyber lawyer has 8 years of experience, an 88% success rate, and 160 cases solved. With a 4.6 customer rating, they are a great choice for cybersecurity and data protection cases.\n\nLawyer 32: A top-tier cyber lawyer with 20 years of experience, a 97% success rate, and 450 cases solved. Their perfect 5.0 rating highlights their expertise in high-profile online fraud cases."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best corporate lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in business contracts, mergers, and corporate disputes.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 33,\n      \"case_type\": \"Corporate\",\n      \"years_experience\": 10,\n      \"success_rate\": 85,\n      \"cases_solved\": 250,\n      \"customer_rating\": 4.5\n    },\n    {\n      \"lawyer_id\": 34,\n      \"case_type\": \"Corporate\",\n      \"years_experience\": 22,\n      \"success_rate\": 92,\n      \"cases_solved\": 500,\n      \"customer_rating\": 4.9\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 33: This corporate lawyer has 10 years of experience, an 85% success rate, and 250 cases solved. They are well-suited for medium-sized business contracts and corporate disputes.\n\nLawyer 34: With 22 years of experience, a 92% success rate, and 500 cases solved, this lawyer is highly recommended for complex corporate mergers and high-stakes business litigation."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best family lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in divorce, child custody, and family disputes.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 35,\n      \"case_type\": \"Family\",\n      \"years_experience\": 15,\n      \"success_rate\": 89,\n      \"cases_solved\": 320,\n      \"customer_rating\": 4.7\n    },\n    {\n      \"lawyer_id\": 36,\n      \"case_type\": \"Family\",\n      \"years_experience\": 6,\n      \"success_rate\": 80,\n      \"cases_solved\": 120,\n      \"customer_rating\": 4.3\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 35: This family lawyer has 15 years of experience, an 89% success rate, and 320 cases solved. They are highly recommended for child custody and divorce cases.\n\nLawyer 36: With 6 years of experience, an 80% success rate, and 120 cases solved, this lawyer is a dependable option for less complex family disputes."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best civil lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in personal injury, contract disputes, and property law.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 37,\n      \"case_type\": \"Personal Injury\",\n      \"years_experience\": 18,\n      \"success_rate\": 91,\n      \"cases_solved\": 400,\n      \"customer_rating\": 4.9\n    },\n    {\n      \"lawyer_id\": 38,\n      \"case_type\": \"Contract Dispute\",\n      \"years_experience\": 8,\n      \"success_rate\": 83,\n      \"cases_solved\": 180,\n      \"customer_rating\": 4.4\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 37: This civil lawyer has 18 years of experience, a 91% success rate, and 400 cases solved. Their 4.9 customer rating highlights their expertise in property law and personal injury cases.\n\nLawyer 38: With 8 years of experience, an 83% success rate, and 180 cases solved, this lawyer is a strong candidate for contract disputes and small claims."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best criminal lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in defense cases, assault, and criminal litigation.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 1,\n      \"case_type\": \"Criminal\",\n      \"years_experience\": 15,\n      \"success_rate\": 92,\n      \"cases_solved\": 320,\n      \"customer_rating\": 4.9\n    },\n    {\n      \"lawyer_id\": 2,\n      \"case_type\": \"Criminal\",\n      \"years_experience\": 7,\n      \"success_rate\": 85,\n      \"cases_solved\": 180,\n      \"customer_rating\": 4.5\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 1: This highly experienced criminal lawyer has 15 years of experience, a 92% success rate, 320 cases solved, and a 4.9 customer rating. They are highly recommended for complex criminal defense cases.\n\nLawyer 2: With 7 years of experience, an 85% success rate, and 180 cases solved, this lawyer is a reliable option for handling various criminal litigation cases."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best environmental lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in environmental law, climate policy, and pollution control.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 3,\n      \"case_type\": \"Environmental Law\",\n      \"years_experience\": 12,\n      \"success_rate\": 88,\n      \"cases_solved\": 250,\n      \"customer_rating\": 4.7\n    },\n    {\n      \"lawyer_id\": 4,\n      \"case_type\": \"Environmental Law\",\n      \"years_experience\": 6,\n      \"success_rate\": 82,\n      \"cases_solved\": 140,\n      \"customer_rating\": 4.3\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 3: With 12 years of experience and an 88% success rate, this lawyer has solved 250 cases related to Civil issues and has a 4.7 customer rating. They are an excellent choice for climate policy cases.\n\nLawyer 4: This lawyer, with 6 years of experience and a success rate of 82%, has handled 140 cases. They are well-regarded for their work in Civil cases."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best family lawyers based on experience, success rate, cases solved, and customer rating. Focus on divorce settlements, child custody, and family disputes.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 5,\n      \"case_type\": \"Divorce Settlement\",\n      \"years_experience\": 10,\n      \"success_rate\": 87,\n      \"cases_solved\": 210,\n      \"customer_rating\": 4.6\n    },\n    {\n      \"lawyer_id\": 6,\n      \"case_type\": \"Child Custody\",\n      \"years_experience\": 4,\n      \"success_rate\": 75,\n      \"cases_solved\": 80,\n      \"customer_rating\": 4.1\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 5: This family lawyer has 10 years of experience, an 87% success rate, 210 cases solved, and a 4.6 customer rating. They specialize in divorce settlements and child custody cases.\n\nLawyer 6: With 4 years of experience and a 75% success rate, this lawyer has handled 80 family law cases. They are a solid choice for family disputes on a budget."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best criminal lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in defense cases, assault, and criminal litigation.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 1,\n      \"case_type\": \"Criminal\",\n      \"years_experience\": 15,\n      \"success_rate\": 92,\n      \"cases_solved\": 320,\n      \"customer_rating\": 4.9\n    },\n    {\n      \"lawyer_id\": 2,\n      \"case_type\": \"Criminal\",\n      \"years_experience\": 7,\n      \"success_rate\": 85,\n      \"cases_solved\": 180,\n      \"customer_rating\": 4.5\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 1: This highly experienced criminal lawyer has 15 years of experience, a 92% success rate, 320 cases solved, and a 4.9 customer rating. They are highly recommended for complex criminal defense cases.\n\nLawyer 2: With 7 years of experience, an 85% success rate, and 180 cases solved, this lawyer is a reliable option for handling various criminal litigation cases."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best environmental lawyers based on experience, success rate, cases solved, and customer rating. Focus on expertise in environmental law, climate policy, and pollution control.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 3,\n      \"case_type\": \"Civil\",\n      \"years_experience\": 12,\n      \"success_rate\": 88,\n      \"cases_solved\": 250,\n      \"customer_rating\": 4.7\n    },\n    {\n      \"lawyer_id\": 4,\n      \"case_type\": \"Civil\",\n      \"years_experience\": 6,\n      \"success_rate\": 82,\n      \"cases_solved\": 140,\n      \"customer_rating\": 4.3\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 3: With 12 years of experience and an 88% success rate, this lawyer has solved 250 cases related to Civil issues and has a 4.7 customer rating. They are an excellent choice for Civil cases.\n\nLawyer 4: This lawyer, with 6 years of experience and a success rate of 82%, has handled 140 cases. They are well-regarded for their work in Civil compliance."},
      {text: "input: {\n  \"prompt\": \"Train a model to recommend the best family lawyers based on experience, success rate, cases solved, and customer rating. Focus on divorce settlements, child custody, and family disputes.\",\n  \"data\": [\n    {\n      \"lawyer_id\": 5,\n      \"case_type\": \"Family\",\n      \"years_experience\": 10,\n      \"success_rate\": 87,\n      \"cases_solved\": 210,\n      \"customer_rating\": 4.6\n    },\n    {\n      \"lawyer_id\": 6,\n      \"case_type\": \"Family\",\n      \"years_experience\": 4,\n      \"success_rate\": 75,\n      \"cases_solved\": 80,\n      \"customer_rating\": 4.1\n    }\n  ],\n  \"target_metric\": \"f1_score\"\n}"},
      {text: "output: Lawyer 5: This family lawyer has 10 years of experience, an 87% success rate, 210 cases solved, and a 4.6 customer rating. They specialize in divorce settlements and child custody cases.\n\nLawyer 6: With 4 years of experience and a 75% success rate, this lawyer has handled 80 family law cases. They are a solid choice for family disputes on a budget."},
    ];
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });
  }


  module.exports = run;

  // export default run;
