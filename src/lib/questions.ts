export type Question = {
  id: string;
  prompt: string;
  options: { id: string; label: string }[];
  answer: string;
  helpText?: string;
};

export const ACTUARIAL_QUESTIONS: Question[] = [
  {
    "id": "act-1",
    "prompt": "Under the Payment of Gratuity Act, 1972, gratuity becomes payable to an employee on which of the following events?",
    "options": [
      {
        "id": "a",
        "label": "Only on retirement after age 60"
      },
      {
        "id": "b",
        "label": "Retirement, resignation, death or disablement, or termination after required service"
      },
      {
        "id": "c",
        "label": "Only on death while in service"
      },
      {
        "id": "d",
        "label": "Only on superannuation as per company rules"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-2",
    "prompt": "The minimum continuous service generally required to be eligible for statutory gratuity (except in case of death or disablement) is:",
    "options": [
      {
        "id": "a",
        "label": "3 years"
      },
      {
        "id": "b",
        "label": "4 years"
      },
      {
        "id": "c",
        "label": "5 years"
      },
      {
        "id": "d",
        "label": "10 years"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-3",
    "prompt": "For the purpose of the Gratuity Act, 1972, an establishment is generally covered if it employs:",
    "options": [
      {
        "id": "a",
        "label": "5 or more persons"
      },
      {
        "id": "b",
        "label": "10 or more persons"
      },
      {
        "id": "c",
        "label": "20 or more persons"
      },
      {
        "id": "d",
        "label": "50 or more persons"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-4",
    "prompt": "Under the Gratuity Act, “continuous service” primarily refers to:",
    "options": [
      {
        "id": "a",
        "label": "Service without any leave availed"
      },
      {
        "id": "b",
        "label": "Service that is not broken by periods defined as interruptions under the Act"
      },
      {
        "id": "c",
        "label": "Service only under a permanent contract"
      },
      {
        "id": "d",
        "label": "Service completed in a single financial year"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-5",
    "prompt": "For employees covered by the Gratuity Act, the statutory formula for gratuity is typically based on:",
    "options": [
      {
        "id": "a",
        "label": "10 days’ wages for each completed year of service"
      },
      {
        "id": "b",
        "label": "15 days’ wages for each completed year of service"
      },
      {
        "id": "c",
        "label": "20 days’ wages for each completed year of service"
      },
      {
        "id": "d",
        "label": "30 days’ wages for each completed year of service"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-6",
    "prompt": "In the statutory gratuity formula, the “wages” used for calculation generally exclude which of the following?",
    "options": [
      {
        "id": "a",
        "label": "Basic and dearness allowance"
      },
      {
        "id": "b",
        "label": "Basic salary only"
      },
      {
        "id": "c",
        "label": "Dearness allowance and retaining allowance"
      },
      {
        "id": "d",
        "label": "Bonus and overtime"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-7",
    "prompt": "When an employee dies in service, gratuity under the Act is payable:",
    "options": [
      {
        "id": "a",
        "label": "Only if 5 years of service are completed"
      },
      {
        "id": "b",
        "label": "Irrespective of length of service"
      },
      {
        "id": "c",
        "label": "Only if nominee is registered"
      },
      {
        "id": "d",
        "label": "Only if death occurs at workplace"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-8",
    "prompt": "The current statutory monetary ceiling for gratuity payable under the Gratuity Act for private sector employees (subject to latest notified limit) is most commonly:",
    "options": [
      {
        "id": "a",
        "label": "Rs. 10 lakh"
      },
      {
        "id": "b",
        "label": "Rs. 15 lakh"
      },
      {
        "id": "c",
        "label": "Rs. 20 lakh"
      },
      {
        "id": "d",
        "label": "Rs. 25 lakh"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-9",
    "prompt": "Which of the following best describes a “non-act liability” for gratuity in actuarial valuation practice in India?",
    "options": [
      {
        "id": "a",
        "label": "Liability in excess of the statutory gratuity ceiling"
      },
      {
        "id": "b",
        "label": "Liability for employees not covered under the Gratuity Act"
      },
      {
        "id": "c",
        "label": "Liability arising from non-vesting benefits"
      },
      {
        "id": "d",
        "label": "Liability not allowed as a tax deduction"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-10",
    "prompt": "In many company gratuity schemes, benefits better than the Act (e.g. 1 month per year) are called:",
    "options": [
      {
        "id": "a",
        "label": "Super-statutory benefits"
      },
      {
        "id": "b",
        "label": "Non-statutory forfeitures"
      },
      {
        "id": "c",
        "label": "Back-loaded benefits"
      },
      {
        "id": "d",
        "label": "Conditional accruals"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-11",
    "prompt": "Which of the following is TRUE about tax treatment of gratuity received from an approved gratuity fund by a non-government employee (subject to Income-tax provisions)?",
    "options": [
      {
        "id": "a",
        "label": "Entire gratuity is always taxable"
      },
      {
        "id": "b",
        "label": "Entire gratuity is always tax-free"
      },
      {
        "id": "c",
        "label": "Exemption is subject to a monetary ceiling and other limits under the Income-tax Act"
      },
      {
        "id": "d",
        "label": "Gratuity is taxable only if paid in cash"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-12",
    "prompt": "In actuarial valuation of gratuity benefits, the benefit is generally treated as which type of obligation under AS 15 (Revised) or Ind AS 19?",
    "options": [
      {
        "id": "a",
        "label": "Short-term employee benefit"
      },
      {
        "id": "b",
        "label": "Defined contribution post-employment benefit"
      },
      {
        "id": "c",
        "label": "Defined benefit post-employment benefit"
      },
      {
        "id": "d",
        "label": "Termination benefit only"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-13",
    "prompt": "For a gratuity scheme, the vesting condition under the Gratuity Act is primarily:",
    "options": [
      {
        "id": "a",
        "label": "Completion of 3 years of service"
      },
      {
        "id": "b",
        "label": "Completion of 5 years of continuous service (except in death/disablement)"
      },
      {
        "id": "c",
        "label": "Completion of 7 years of service"
      },
      {
        "id": "d",
        "label": "No vesting condition applies"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-14",
    "prompt": "In a typical funded gratuity scheme with an insurer, the actuarial liability used for accounting is usually:",
    "options": [
      {
        "id": "a",
        "label": "Always equal to the fund value"
      },
      {
        "id": "b",
        "label": "Higher of actuarial liability and fund value"
      },
      {
        "id": "c",
        "label": "Actuarial present value of accrued benefits, independent of current fund value"
      },
      {
        "id": "d",
        "label": "Lower of actuarial liability and fund value"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-15",
    "prompt": "For an employee with breaks in service, whether service is “continuous” for gratuity depends primarily on:",
    "options": [
      {
        "id": "a",
        "label": "HR policy of the company"
      },
      {
        "id": "b",
        "label": "The employee’s designation"
      },
      {
        "id": "c",
        "label": "Definitions and rules under the Gratuity Act"
      },
      {
        "id": "d",
        "label": "Approval from tax authorities"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-16",
    "prompt": "Under the Gratuity Act, calculation of years of service for a monthly rated employee generally counts a fraction of a year exceeding:",
    "options": [
      {
        "id": "a",
        "label": "30 days as a year"
      },
      {
        "id": "b",
        "label": "180 days as a completed year"
      },
      {
        "id": "c",
        "label": "240 days as a completed year"
      },
      {
        "id": "d",
        "label": "365 days as a completed year"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-17",
    "prompt": "Which of the following is an example of a plan amendment for gratuity in actuarial valuation terms?",
    "options": [
      {
        "id": "a",
        "label": "Change in discount rate"
      },
      {
        "id": "b",
        "label": "Change in salary escalation assumption"
      },
      {
        "id": "c",
        "label": "Change in benefit formula from 15 days to 30 days per year"
      },
      {
        "id": "d",
        "label": "Change in mortality table"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-18",
    "prompt": "In the context of gratuity, which is the MOST appropriate description of “past service cost”?",
    "options": [
      {
        "id": "a",
        "label": "Cost due to change in actuarial assumptions in the current year"
      },
      {
        "id": "b",
        "label": "Increase in present value of obligation due to improvement in benefits for past service"
      },
      {
        "id": "c",
        "label": "Interest cost on opening liability"
      },
      {
        "id": "d",
        "label": "Employer’s contribution paid during the year"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-19",
    "prompt": "When a company closes a unit and terminates employment, resulting in loss of future service and reduction in future benefits, this is generally called:",
    "options": [
      {
        "id": "a",
        "label": "Past service cost"
      },
      {
        "id": "b",
        "label": "Curtailment"
      },
      {
        "id": "c",
        "label": "Settlement"
      },
      {
        "id": "d",
        "label": "Actuarial gain"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-20",
    "prompt": "Which of the following is generally NOT an assumption required specifically for a gratuity valuation?",
    "options": [
      {
        "id": "a",
        "label": "Salary escalation"
      },
      {
        "id": "b",
        "label": "Employee withdrawal/attrition"
      },
      {
        "id": "c",
        "label": "Pre-retirement mortality"
      },
      {
        "id": "d",
        "label": "Investment return on shareholders’ funds"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-21",
    "prompt": "Under Indian practice, discount rate used for defined benefit plans like gratuity is typically based on:",
    "options": [
      {
        "id": "a",
        "label": "Average bank fixed deposit rate"
      },
      {
        "id": "b",
        "label": "Government bond yields of appropriate term"
      },
      {
        "id": "c",
        "label": "Company’s expected investment return"
      },
      {
        "id": "d",
        "label": "Inflation rate plus a fixed margin"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-22",
    "prompt": "If the benefit formula provides gratuity on “basic + DA”, increasing DA as a policy will most directly impact which component of the valuation?",
    "options": [
      {
        "id": "a",
        "label": "Number of members"
      },
      {
        "id": "b",
        "label": "Discount rate"
      },
      {
        "id": "c",
        "label": "Salary scale and hence projected benefits"
      },
      {
        "id": "d",
        "label": "Withdrawal rates"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-23",
    "prompt": "Which of the following situations typically leads to an actuarial loss on gratuity obligation?",
    "options": [
      {
        "id": "a",
        "label": "Actual salary growth lower than assumed"
      },
      {
        "id": "b",
        "label": "Actual withdrawals higher than assumed"
      },
      {
        "id": "c",
        "label": "Reduction in discount rate compared to previous year"
      },
      {
        "id": "d",
        "label": "Increase in retirement age"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-24",
    "prompt": "For a company with both Act and non-Act gratuity members, which is the most appropriate approach in actuarial valuation?",
    "options": [
      {
        "id": "a",
        "label": "Ignore non-Act members"
      },
      {
        "id": "b",
        "label": "Value Act and non-Act members separately but using consistent principles"
      },
      {
        "id": "c",
        "label": "Use a single flat liability equal to 4.81% of salary"
      },
      {
        "id": "d",
        "label": "Value only those with service greater than 5 years"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-25",
    "prompt": "Which of the following is TRUE regarding gratuity scheme funding in India?",
    "options": [
      {
        "id": "a",
        "label": "Funding through a trust or insurer is legally mandatory for all employers"
      },
      {
        "id": "b",
        "label": "Funding is optional; many smaller companies keep gratuity unfunded"
      },
      {
        "id": "c",
        "label": "Funding is allowed only through government schemes"
      },
      {
        "id": "d",
        "label": "Funding is prohibited under tax laws"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-26",
    "prompt": "In an IFRS/Ind AS environment, gratuity obligations are classified on the balance sheet as:",
    "options": [
      {
        "id": "a",
        "label": "Purely current liabilities"
      },
      {
        "id": "b",
        "label": "Purely non-current liabilities"
      },
      {
        "id": "c",
        "label": "Split into current and non-current portions based on expected benefit payments"
      },
      {
        "id": "d",
        "label": "Off-balance sheet items"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-27",
    "prompt": "Payment of gratuity on resignation before vesting service under the Act:",
    "options": [
      {
        "id": "a",
        "label": "Is mandated at a reduced scale"
      },
      {
        "id": "b",
        "label": "Is not mandated under the Act but may be provided under company policy"
      },
      {
        "id": "c",
        "label": "Is always mandatory at full scale"
      },
      {
        "id": "d",
        "label": "Is prohibited by the Act"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-28",
    "prompt": "In actuarial reports, “sensitivity analysis” for gratuity typically shows impact on DBO due to changes in which of the following?",
    "options": [
      {
        "id": "a",
        "label": "Only number of employees"
      },
      {
        "id": "b",
        "label": "Discount rate, salary escalation and withdrawal assumptions"
      },
      {
        "id": "c",
        "label": "Corporate tax rate"
      },
      {
        "id": "d",
        "label": "Share price movements"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-29",
    "prompt": "Which of the following is a key difference between an “unfunded” and “funded” gratuity scheme?",
    "options": [
      {
        "id": "a",
        "label": "Type of benefit formula"
      },
      {
        "id": "b",
        "label": "Whether benefit is defined contribution or defined benefit"
      },
      {
        "id": "c",
        "label": "Whether assets are set aside in a trust/insurer to meet obligations"
      },
      {
        "id": "d",
        "label": "Whether the scheme is covered under the Gratuity Act"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-30",
    "prompt": "Leave encashment benefit that can be carried forward and encashed on termination is usually classified under AS 15 / Ind AS 19 as:",
    "options": [
      {
        "id": "a",
        "label": "Short-term employee benefit"
      },
      {
        "id": "b",
        "label": "Post-employment benefit"
      },
      {
        "id": "c",
        "label": "Other long-term employee benefit"
      },
      {
        "id": "d",
        "label": "Termination benefit"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-31",
    "prompt": "Short-term accumulated leave encashment expected to be used within 12 months of the balance sheet date is classified as:",
    "options": [
      {
        "id": "a",
        "label": "Short-term employee benefit"
      },
      {
        "id": "b",
        "label": "Post-employment benefit"
      },
      {
        "id": "c",
        "label": "Other long-term employee benefit"
      },
      {
        "id": "d",
        "label": "Share-based payment"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-32",
    "prompt": "Which of the following best describes “accumulating compensated absences”?",
    "options": [
      {
        "id": "a",
        "label": "Leave that lapses at year-end"
      },
      {
        "id": "b",
        "label": "Leave that can be carried forward and used in future periods"
      },
      {
        "id": "c",
        "label": "Leave available only on retirement"
      },
      {
        "id": "d",
        "label": "Unpaid extra working days"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-33",
    "prompt": "For non-vesting accumulating leave (no cash on exit), an obligation exists because:",
    "options": [
      {
        "id": "a",
        "label": "Employees can require cash settlement at any time"
      },
      {
        "id": "b",
        "label": "Employees may use accumulated leave in future periods"
      },
      {
        "id": "c",
        "label": "Tax rules require a provision"
      },
      {
        "id": "d",
        "label": "Auditors require it regardless of plan design"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-34",
    "prompt": "Under AS 15 (Revised), short-term accumulating compensated absences are measured at:",
    "options": [
      {
        "id": "a",
        "label": "Present value of future benefits"
      },
      {
        "id": "b",
        "label": "Undiscounted expected additional payments"
      },
      {
        "id": "c",
        "label": "Fair value using an option pricing model"
      },
      {
        "id": "d",
        "label": "Intrinsic value at year-end"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-35",
    "prompt": "An example of a “vesting” leave benefit is:",
    "options": [
      {
        "id": "a",
        "label": "Casual leave that lapses at year end"
      },
      {
        "id": "b",
        "label": "Sick leave that cannot be encashed"
      },
      {
        "id": "c",
        "label": "Leave that can be encashed on resignation"
      },
      {
        "id": "d",
        "label": "Unpaid study leave"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-36",
    "prompt": "If leave encashment is available only on retirement and not on resignation, it is generally treated as:",
    "options": [
      {
        "id": "a",
        "label": "Short-term benefit"
      },
      {
        "id": "b",
        "label": "Post-employment or other long-term benefit depending on terms"
      },
      {
        "id": "c",
        "label": "Share-based payment"
      },
      {
        "id": "d",
        "label": "Termination benefit only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-37",
    "prompt": "In actuarial valuation of long-term leave encashment, which of the following assumptions is usually NOT required?",
    "options": [
      {
        "id": "a",
        "label": "Salary escalation"
      },
      {
        "id": "b",
        "label": "Discount rate"
      },
      {
        "id": "c",
        "label": "Expected equity return"
      },
      {
        "id": "d",
        "label": "Withdrawal/attrition rates"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-38",
    "prompt": "A company offers 30 days of earned leave per year, unused leave accumulates without limit and is encashable at exit. This benefit is best classified as:",
    "options": [
      {
        "id": "a",
        "label": "Post-employment defined contribution plan"
      },
      {
        "id": "b",
        "label": "Post-employment defined benefit plan"
      },
      {
        "id": "c",
        "label": "Other long-term employee benefit"
      },
      {
        "id": "d",
        "label": "Short-term employee benefit only"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-39",
    "prompt": "Under AS 15 / Ind AS 19, actuarial gains and losses for other long-term employee benefits like long-term leave are:",
    "options": [
      {
        "id": "a",
        "label": "Recognised immediately in profit and loss"
      },
      {
        "id": "b",
        "label": "Deferred and amortised over remaining service"
      },
      {
        "id": "c",
        "label": "Recognised in OCI"
      },
      {
        "id": "d",
        "label": "Never recognised"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-40",
    "prompt": "Which is TRUE regarding tax treatment of leave encashment on retirement for non-government employees (subject to tax law)?",
    "options": [
      {
        "id": "a",
        "label": "Always fully tax-free"
      },
      {
        "id": "b",
        "label": "Always fully taxable"
      },
      {
        "id": "c",
        "label": "Subject to specified monetary limits and conditions"
      },
      {
        "id": "d",
        "label": "Tax-free only if paid after age 60"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-41",
    "prompt": "In a valuation of long-term leave, the probability that an employee will have sufficient accumulated leave balance at exit is usually handled by:",
    "options": [
      {
        "id": "a",
        "label": "A separate “leave balance” model or implicit assumption in benefit incidence factors"
      },
      {
        "id": "b",
        "label": "Changing the mortality table"
      },
      {
        "id": "c",
        "label": "Ignoring leave carried forward"
      },
      {
        "id": "d",
        "label": "Using zero withdrawal rate"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-42",
    "prompt": "For short-term non-accumulating sick leave (which lapses if unused), an expense is recognised:",
    "options": [
      {
        "id": "a",
        "label": "When leave is granted at start of the year"
      },
      {
        "id": "b",
        "label": "Only when leave is actually taken"
      },
      {
        "id": "c",
        "label": "Only on retirement"
      },
      {
        "id": "d",
        "label": "Not at all"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-43",
    "prompt": "A key difference between leave encashment and gratuity from valuation perspective is that leave encashment:",
    "options": [
      {
        "id": "a",
        "label": "Is always fully funded"
      },
      {
        "id": "b",
        "label": "Can be both short-term and long-term depending on terms"
      },
      {
        "id": "c",
        "label": "Is always post-employment"
      },
      {
        "id": "d",
        "label": "Has no actuarial assumptions"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-44",
    "prompt": "If a company changes its leave policy to allow encashment on resignation where previously encashment was only on retirement, this change is typically:",
    "options": [
      {
        "id": "a",
        "label": "A change in actuarial assumption"
      },
      {
        "id": "b",
        "label": "A plan amendment leading to past service cost"
      },
      {
        "id": "c",
        "label": "An actuarial gain"
      },
      {
        "id": "d",
        "label": "A settlement"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-45",
    "prompt": "Under the Employees’ Provident Fund (EPF) in India, the employer contribution is typically treated for accounting purposes as:",
    "options": [
      {
        "id": "a",
        "label": "Short-term employee benefit"
      },
      {
        "id": "b",
        "label": "Defined contribution post-employment benefit"
      },
      {
        "id": "c",
        "label": "Defined benefit post-employment benefit"
      },
      {
        "id": "d",
        "label": "Other long-term employee benefit"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-46",
    "prompt": "A traditional exempted provident fund managed by a company trust with guaranteed interest may be classified under AS 15 / Ind AS 19 as:",
    "options": [
      {
        "id": "a",
        "label": "Defined contribution plan"
      },
      {
        "id": "b",
        "label": "Defined benefit plan"
      },
      {
        "id": "c",
        "label": "Short-term employee benefit"
      },
      {
        "id": "d",
        "label": "Termination benefit"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-47",
    "prompt": "Which of the following is TRUE about defined contribution plans?",
    "options": [
      {
        "id": "a",
        "label": "Employer’s obligation is limited to fixed contributions"
      },
      {
        "id": "b",
        "label": "Employer must guarantee a minimum return"
      },
      {
        "id": "c",
        "label": "Actuarial valuation is always required"
      },
      {
        "id": "d",
        "label": "Benefit formula is based on years of service and final salary"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-48",
    "prompt": "In a defined benefit pension scheme, actuarial risk and investment risk are borne primarily by:",
    "options": [
      {
        "id": "a",
        "label": "Employees"
      },
      {
        "id": "b",
        "label": "Employer"
      },
      {
        "id": "c",
        "label": "Government"
      },
      {
        "id": "d",
        "label": "Auditors"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-49",
    "prompt": "The Employees’ Pension Scheme (EPS) associated with EPF is conceptually a:",
    "options": [
      {
        "id": "a",
        "label": "Defined contribution plan"
      },
      {
        "id": "b",
        "label": "Defined benefit plan"
      },
      {
        "id": "c",
        "label": "Short-term employee benefit plan"
      },
      {
        "id": "d",
        "label": "Share-based payment plan"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-50",
    "prompt": "For a pure defined contribution plan, expense recognised in the P&L in a period is generally:",
    "options": [
      {
        "id": "a",
        "label": "Actuarial present value of benefits accrued"
      },
      {
        "id": "b",
        "label": "Amount of contributions due for that period"
      },
      {
        "id": "c",
        "label": "Benefit payments made during the period only"
      },
      {
        "id": "d",
        "label": "Nil"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-51",
    "prompt": "Under AS 15, an enterprise’s obligation in a defined contribution plan ends when:",
    "options": [
      {
        "id": "a",
        "label": "Employee retires"
      },
      {
        "id": "b",
        "label": "Contributions are paid as per the plan terms"
      },
      {
        "id": "c",
        "label": "Fund value equals liability"
      },
      {
        "id": "d",
        "label": "Actuarial report is signed"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-52",
    "prompt": "For a funded defined benefit pension scheme, plan assets are:",
    "options": [
      {
        "id": "a",
        "label": "Always equal to the defined benefit obligation"
      },
      {
        "id": "b",
        "label": "Assets held in a separate entity, available only to pay plan benefits"
      },
      {
        "id": "c",
        "label": "Employer’s general investments"
      },
      {
        "id": "d",
        "label": "Always government bonds"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-53",
    "prompt": "In a final salary defined benefit pension, the most appropriate actuarial method under AS 15 / Ind AS 19 is generally:",
    "options": [
      {
        "id": "a",
        "label": "Accumulated benefit method"
      },
      {
        "id": "b",
        "label": "Projected Unit Credit method"
      },
      {
        "id": "c",
        "label": "Entry age normal method using contributions"
      },
      {
        "id": "d",
        "label": "No method is prescribed"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-54",
    "prompt": "A multi-employer pension plan where individual employer share of obligations cannot be reliably identified is often accounted as:",
    "options": [
      {
        "id": "a",
        "label": "Defined benefit plan"
      },
      {
        "id": "b",
        "label": "Defined contribution plan"
      },
      {
        "id": "c",
        "label": "Short-term benefit plan"
      },
      {
        "id": "d",
        "label": "Termination benefit plan"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-55",
    "prompt": "Which is TRUE regarding state plans like statutory social security plans under AS 15?",
    "options": [
      {
        "id": "a",
        "label": "They are always defined benefit plans"
      },
      {
        "id": "b",
        "label": "They are usually treated as defined contribution from employer perspective"
      },
      {
        "id": "c",
        "label": "They are never in scope of AS 15"
      },
      {
        "id": "d",
        "label": "They must be actuarially valued by each employer"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-56",
    "prompt": "In a superannuation scheme where benefit is fixed at 50% of final salary after 30 years’ service, this is best described as:",
    "options": [
      {
        "id": "a",
        "label": "Defined contribution plan"
      },
      {
        "id": "b",
        "label": "Defined benefit plan"
      },
      {
        "id": "c",
        "label": "Short-term benefit"
      },
      {
        "id": "d",
        "label": "Share-based payment"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-57",
    "prompt": "For Indian exempt PF trusts, actuarial valuation sometimes focuses on:",
    "options": [
      {
        "id": "a",
        "label": "Equity market volatility only"
      },
      {
        "id": "b",
        "label": "Interest rate guarantee vs fund returns"
      },
      {
        "id": "c",
        "label": "Mortality improvements only"
      },
      {
        "id": "d",
        "label": "Salary escalation only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-58",
    "prompt": "A hybrid plan with a guaranteed minimum return and upside linked to investment performance is usually treated as:",
    "options": [
      {
        "id": "a",
        "label": "Pure defined contribution"
      },
      {
        "id": "b",
        "label": "Pure defined benefit or defined benefit with embedded option"
      },
      {
        "id": "c",
        "label": "Termination benefit"
      },
      {
        "id": "d",
        "label": "Short-term benefit"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-59",
    "prompt": "Employer contributions to National Pension System (NPS) for employees are typically accounted as:",
    "options": [
      {
        "id": "a",
        "label": "Defined contribution post-employment benefits"
      },
      {
        "id": "b",
        "label": "Defined benefit post-employment benefits"
      },
      {
        "id": "c",
        "label": "Termination benefits"
      },
      {
        "id": "d",
        "label": "Short-term employee benefits only"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-60",
    "prompt": "In a defined benefit pension, “service cost” generally excludes which of the following?",
    "options": [
      {
        "id": "a",
        "label": "Current service cost"
      },
      {
        "id": "b",
        "label": "Past service cost"
      },
      {
        "id": "c",
        "label": "Interest cost"
      },
      {
        "id": "d",
        "label": "Return on plan assets"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-61",
    "prompt": "An unfunded pension promise recorded only by book entry leads to:",
    "options": [
      {
        "id": "a",
        "label": "No accounting requirement"
      },
      {
        "id": "b",
        "label": "Recognition of a defined benefit obligation with no plan assets"
      },
      {
        "id": "c",
        "label": "Recognition of a defined contribution plan"
      },
      {
        "id": "d",
        "label": "Recognition only at payment"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-62",
    "prompt": "Which of the following is a typical actuarial assumption specific to pension plans but not usually required for gratuity in India?",
    "options": [
      {
        "id": "a",
        "label": "Retirement age"
      },
      {
        "id": "b",
        "label": "Pension increase (indexation) post-retirement"
      },
      {
        "id": "c",
        "label": "Salary increase"
      },
      {
        "id": "d",
        "label": "Withdrawal rate"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-63",
    "prompt": "For a defined benefit pension scheme closed to new entrants, one common trend over time is:",
    "options": [
      {
        "id": "a",
        "label": "DBO decreases automatically"
      },
      {
        "id": "b",
        "label": "Average age of members increases and liabilities may become more sensitive to discount rate"
      },
      {
        "id": "c",
        "label": "Service cost always increases"
      },
      {
        "id": "d",
        "label": "No change in risk profile"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-64",
    "prompt": "In Indian practice, actuarial valuation of pension benefits for accounting is usually required:",
    "options": [
      {
        "id": "a",
        "label": "Only if scheme is funded"
      },
      {
        "id": "b",
        "label": "For both funded and unfunded defined benefit pension promises"
      },
      {
        "id": "c",
        "label": "Only for new schemes"
      },
      {
        "id": "d",
        "label": "Only once at inception"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-65",
    "prompt": "Post-retirement medical benefits (PRMBs) offered to retired employees are usually classified as:",
    "options": [
      {
        "id": "a",
        "label": "Short-term benefits"
      },
      {
        "id": "b",
        "label": "Post-employment defined benefit obligations"
      },
      {
        "id": "c",
        "label": "Defined contribution plans"
      },
      {
        "id": "d",
        "label": "Termination benefits only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-66",
    "prompt": "Which of the following is a key additional actuarial assumption required for PRMB valuation compared to gratuity?",
    "options": [
      {
        "id": "a",
        "label": "Mortality"
      },
      {
        "id": "b",
        "label": "Withdrawal rates"
      },
      {
        "id": "c",
        "label": "Healthcare cost trend rate"
      },
      {
        "id": "d",
        "label": "Discount rate"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-67",
    "prompt": "In PRMBs, the risk that healthcare costs increase faster than expected is called:",
    "options": [
      {
        "id": "a",
        "label": "Interest rate risk"
      },
      {
        "id": "b",
        "label": "Longevity risk"
      },
      {
        "id": "c",
        "label": "Salary risk"
      },
      {
        "id": "d",
        "label": "Healthcare cost trend risk"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-68",
    "prompt": "Post-retirement life insurance benefits with defined coverage amount are usually treated as:",
    "options": [
      {
        "id": "a",
        "label": "Defined contribution plans"
      },
      {
        "id": "b",
        "label": "Defined benefit post-employment plans"
      },
      {
        "id": "c",
        "label": "Short-term benefits"
      },
      {
        "id": "d",
        "label": "Share-based payments"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-69",
    "prompt": "Under AS 15 / Ind AS 19, actuarial gains and losses for PRMBs are:",
    "options": [
      {
        "id": "a",
        "label": "Recognised immediately in profit and loss (AS 15) or in OCI (Ind AS 19)"
      },
      {
        "id": "b",
        "label": "Never recognised"
      },
      {
        "id": "c",
        "label": "Deferred indefinitely"
      },
      {
        "id": "d",
        "label": "Recognised only on settlement"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-70",
    "prompt": "Which of the following best describes “other post-employment benefits” under AS 15 / Ind AS 19?",
    "options": [
      {
        "id": "a",
        "label": "Only gratuity and pension"
      },
      {
        "id": "b",
        "label": "All long-term benefits paid after employment, excluding share-based payments"
      },
      {
        "id": "c",
        "label": "Only medical benefits"
      },
      {
        "id": "d",
        "label": "Only insurance benefits"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-71",
    "prompt": "For PRMBs, a common design feature that significantly increases liability is:",
    "options": [
      {
        "id": "a",
        "label": "Very high retirement age"
      },
      {
        "id": "b",
        "label": "No dependants covered"
      },
      {
        "id": "c",
        "label": "Low co-payments and lifetime coverage"
      },
      {
        "id": "d",
        "label": "Short vesting period"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-72",
    "prompt": "Which is TRUE about discount rate used for PRMB valuation under Ind AS 19?",
    "options": [
      {
        "id": "a",
        "label": "Based on expected return on plan assets"
      },
      {
        "id": "b",
        "label": "Based on government bond yields of appropriate term"
      },
      {
        "id": "c",
        "label": "Based on bank deposit rate"
      },
      {
        "id": "d",
        "label": "Chosen arbitrarily by management"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-73",
    "prompt": "PRMBs are particularly sensitive to which combination of assumptions?",
    "options": [
      {
        "id": "a",
        "label": "Withdrawal rates and equity returns"
      },
      {
        "id": "b",
        "label": "Salary growth and inflation"
      },
      {
        "id": "c",
        "label": "Healthcare cost inflation and discount rate"
      },
      {
        "id": "d",
        "label": "Mortality improvements only"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-74",
    "prompt": "A plan change that introduces a new PRMB for all past service is usually recognised as:",
    "options": [
      {
        "id": "a",
        "label": "A curtailment"
      },
      {
        "id": "b",
        "label": "Past service cost"
      },
      {
        "id": "c",
        "label": "Interest cost"
      },
      {
        "id": "d",
        "label": "Actuarial loss"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-75",
    "prompt": "Long service awards payable after, say, 20 years of service are generally classified as:",
    "options": [
      {
        "id": "a",
        "label": "Short-term employee benefits"
      },
      {
        "id": "b",
        "label": "Post-employment benefits"
      },
      {
        "id": "c",
        "label": "Other long-term employee benefits"
      },
      {
        "id": "d",
        "label": "Termination benefits"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-76",
    "prompt": "Which of the following is TRUE for “other long-term employee benefits” such as long service awards under AS 15?",
    "options": [
      {
        "id": "a",
        "label": "Actuarial gains and losses are recognised immediately in profit and loss"
      },
      {
        "id": "b",
        "label": "Actuarial gains and losses are deferred to OCI"
      },
      {
        "id": "c",
        "label": "No actuarial valuation is allowed"
      },
      {
        "id": "d",
        "label": "They are treated as short-term if paid after one year"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-77",
    "prompt": "If a long service award vests only after 10 years of service, expense recognition under AS 15 / Ind AS 19:",
    "options": [
      {
        "id": "a",
        "label": "Starts only after vesting"
      },
      {
        "id": "b",
        "label": "Is spread over the vesting period based on service"
      },
      {
        "id": "c",
        "label": "Occurs only when benefit is paid"
      },
      {
        "id": "d",
        "label": "Is not required"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-78",
    "prompt": "A cash bonus paid after completion of 15 years of service, not linked to retirement, is best classified as:",
    "options": [
      {
        "id": "a",
        "label": "Termination benefit"
      },
      {
        "id": "b",
        "label": "Other long-term employee benefit"
      },
      {
        "id": "c",
        "label": "Short-term benefit"
      },
      {
        "id": "d",
        "label": "Share-based payment"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-79",
    "prompt": "In a long service award valuation, which assumption is typically most important?",
    "options": [
      {
        "id": "a",
        "label": "Equity dividend yield"
      },
      {
        "id": "b",
        "label": "Salary escalation and withdrawal rates"
      },
      {
        "id": "c",
        "label": "Healthcare cost trend"
      },
      {
        "id": "d",
        "label": "Corporate tax rate"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-80",
    "prompt": "Under Ind AS 19, long service awards fall under which measurement category?",
    "options": [
      {
        "id": "a",
        "label": "Defined contribution plan"
      },
      {
        "id": "b",
        "label": "Defined benefit plan – other long-term employee benefits"
      },
      {
        "id": "c",
        "label": "Share-based payment"
      },
      {
        "id": "d",
        "label": "Short-term employee benefits"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-81",
    "prompt": "For a non-salary-linked fixed rupee long service award, the main drivers of liability are:",
    "options": [
      {
        "id": "a",
        "label": "Discount rate and service probabilities"
      },
      {
        "id": "b",
        "label": "Salary escalation only"
      },
      {
        "id": "c",
        "label": "Equity returns"
      },
      {
        "id": "d",
        "label": "Inflation only"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-82",
    "prompt": "A change in policy that reduces the benefit for future service only is generally treated as:",
    "options": [
      {
        "id": "a",
        "label": "Past service cost (negative)"
      },
      {
        "id": "b",
        "label": "Actuarial gain"
      },
      {
        "id": "c",
        "label": "Settlement"
      },
      {
        "id": "d",
        "label": "Termination benefit"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-83",
    "prompt": "Which of the following is a difference between other long-term employee benefits and post-employment benefits under Ind AS 19?",
    "options": [
      {
        "id": "a",
        "label": "Recognition principles differ but disclosure requirements are identical"
      },
      {
        "id": "b",
        "label": "Measurement principles differ but recognition is identical"
      },
      {
        "id": "c",
        "label": "Actuarial gains and losses are recognised differently"
      },
      {
        "id": "d",
        "label": "No difference at all"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-84",
    "prompt": "If a company has both a long service award and gratuity, how are they generally valued?",
    "options": [
      {
        "id": "a",
        "label": "Using the same assumptions without any distinction"
      },
      {
        "id": "b",
        "label": "Separately, but possibly with consistent demographic assumptions where appropriate"
      },
      {
        "id": "c",
        "label": "Only the larger plan is valued"
      },
      {
        "id": "d",
        "label": "By taking average of both benefits"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-85",
    "prompt": "Under AS 15, a defined benefit obligation must be measured using which actuarial method?",
    "options": [
      {
        "id": "a",
        "label": "Attained age method"
      },
      {
        "id": "b",
        "label": "Projected Unit Credit Method"
      },
      {
        "id": "c",
        "label": "Entry Age Normal Method"
      },
      {
        "id": "d",
        "label": "Aggregate Cost Method"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-86",
    "prompt": "Which of the following best describes a “defined benefit plan” under AS 15?",
    "options": [
      {
        "id": "a",
        "label": "Employer's obligation limited to contributions"
      },
      {
        "id": "b",
        "label": "Benefit depends on future variables like salary and service"
      },
      {
        "id": "c",
        "label": "A plan where benefits depend on investment performance only"
      },
      {
        "id": "d",
        "label": "Benefit payable immediately after service"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-87",
    "prompt": "AS 15 requires discount rates to be determined by reference to:",
    "options": [
      {
        "id": "a",
        "label": "Corporate bond yields"
      },
      {
        "id": "b",
        "label": "Government bond yields"
      },
      {
        "id": "c",
        "label": "Fixed deposit rates"
      },
      {
        "id": "d",
        "label": "Mutual fund returns"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-88",
    "prompt": "Under AS 15, actuarial gains and losses for defined benefit plans are:",
    "options": [
      {
        "id": "a",
        "label": "Recognised immediately in P&L"
      },
      {
        "id": "b",
        "label": "Recognised in OCI"
      },
      {
        "id": "c",
        "label": "Deferred over average remaining service"
      },
      {
        "id": "d",
        "label": "Not recognised"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-89",
    "prompt": "Which of the following is included in “service cost” under AS 15?",
    "options": [
      {
        "id": "a",
        "label": "Current service cost only"
      },
      {
        "id": "b",
        "label": "Current service cost + interest cost"
      },
      {
        "id": "c",
        "label": "Current service cost + past service cost"
      },
      {
        "id": "d",
        "label": "Current service cost + past service cost + settlement gains/losses"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-90",
    "prompt": "Which of the following is TRUE about interest cost under AS 15?",
    "options": [
      {
        "id": "a",
        "label": "It is calculated as discount rate × opening obligation"
      },
      {
        "id": "b",
        "label": "It is always zero for unfunded plans"
      },
      {
        "id": "c",
        "label": "It must equal expected return on assets"
      },
      {
        "id": "d",
        "label": "It is optional"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-91",
    "prompt": "Plan assets under AS 15 include:",
    "options": [
      {
        "id": "a",
        "label": "Employer fixed deposits"
      },
      {
        "id": "b",
        "label": "Assets in an approved gratuity fund"
      },
      {
        "id": "c",
        "label": "Paid leave balances"
      },
      {
        "id": "d",
        "label": "Corporate investments"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-92",
    "prompt": "Under AS 15, past service cost arising from a new plan is:",
    "options": [
      {
        "id": "a",
        "label": "Recognised immediately"
      },
      {
        "id": "b",
        "label": "Recognised over remaining vesting period"
      },
      {
        "id": "c",
        "label": "Recognised only on retirement"
      },
      {
        "id": "d",
        "label": "Never recognised"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-93",
    "prompt": "The term “settlement” under AS 15 refers to:",
    "options": [
      {
        "id": "a",
        "label": "Early termination of employee"
      },
      {
        "id": "b",
        "label": "A transaction eliminating employer’s obligation"
      },
      {
        "id": "c",
        "label": "Any plan amendment"
      },
      {
        "id": "d",
        "label": "Employee withdrawal"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-94",
    "prompt": "Which of the following is NOT a component of defined benefit cost under AS 15?",
    "options": [
      {
        "id": "a",
        "label": "Current service cost"
      },
      {
        "id": "b",
        "label": "Interest cost"
      },
      {
        "id": "c",
        "label": "Expected return on plan assets"
      },
      {
        "id": "d",
        "label": "Dividend income on company equity"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-95",
    "prompt": "Under AS 15, actuarial valuation of defined benefit plans must be performed:",
    "options": [
      {
        "id": "a",
        "label": "Every 3 years"
      },
      {
        "id": "b",
        "label": "At least annually"
      },
      {
        "id": "c",
        "label": "Only when requested by auditor"
      },
      {
        "id": "d",
        "label": "Only on funding"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-96",
    "prompt": "Reimbursement rights under AS 15 relate to:",
    "options": [
      {
        "id": "a",
        "label": "Insurance policies qualified to pay benefits"
      },
      {
        "id": "b",
        "label": "Employee contribution refunds"
      },
      {
        "id": "c",
        "label": "PF employer match"
      },
      {
        "id": "d",
        "label": "Share-based settlement"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-97",
    "prompt": "A plan amendment that reduces benefits for future service results in:",
    "options": [
      {
        "id": "a",
        "label": "Past service cost"
      },
      {
        "id": "b",
        "label": "Curtailment"
      },
      {
        "id": "c",
        "label": "Actuarial loss"
      },
      {
        "id": "d",
        "label": "Negative past service cost"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-98",
    "prompt": "Which of the following determines the split between current and non-current portion of liability?",
    "options": [
      {
        "id": "a",
        "label": "Term of government bonds"
      },
      {
        "id": "b",
        "label": "Expected benefit payments in next 12 months"
      },
      {
        "id": "c",
        "label": "Salary escalation rate"
      },
      {
        "id": "d",
        "label": "Company cashflow forecast"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-99",
    "prompt": "If a defined benefit plan is overfunded, AS 15 requires recognition of asset limited to:",
    "options": [
      {
        "id": "a",
        "label": "Full surplus"
      },
      {
        "id": "b",
        "label": "Lower of surplus or available economic benefits"
      },
      {
        "id": "c",
        "label": "Zero"
      },
      {
        "id": "d",
        "label": "Only 50% of surplus"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-100",
    "prompt": "Which employee benefits are NOT covered under AS 15?",
    "options": [
      {
        "id": "a",
        "label": "Share-based payments"
      },
      {
        "id": "b",
        "label": "Gratuity"
      },
      {
        "id": "c",
        "label": "PF"
      },
      {
        "id": "d",
        "label": "Long service awards"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-101",
    "prompt": "An enterprise’s obligation in defined contribution plans under AS 15 ends when:",
    "options": [
      {
        "id": "a",
        "label": "Employee retires"
      },
      {
        "id": "b",
        "label": "Contributions are paid"
      },
      {
        "id": "c",
        "label": "Fund value exceeds contributions"
      },
      {
        "id": "d",
        "label": "Auditor signs report"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-102",
    "prompt": "Under AS 15, actuarial gains or losses arise due to:",
    "options": [
      {
        "id": "a",
        "label": "Change in HR policy"
      },
      {
        "id": "b",
        "label": "Difference between actual and assumed experience"
      },
      {
        "id": "c",
        "label": "Interest rate arbitrage"
      },
      {
        "id": "d",
        "label": "Investment losses outside plan"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-103",
    "prompt": "A valuation discount rate must reflect:",
    "options": [
      {
        "id": "a",
        "label": "Risk-free return + liquidity premium"
      },
      {
        "id": "b",
        "label": "Government bond yields of matching term"
      },
      {
        "id": "c",
        "label": "Company expected return"
      },
      {
        "id": "d",
        "label": "Weighted average cost of capital"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-104",
    "prompt": "Which of the following is NOT an actuarial assumption for defined benefit plan under AS 15?",
    "options": [
      {
        "id": "a",
        "label": "Mortality"
      },
      {
        "id": "b",
        "label": "Withdrawal"
      },
      {
        "id": "c",
        "label": "Equity market volatility"
      },
      {
        "id": "d",
        "label": "Salary escalation"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-105",
    "prompt": "Under Ind AS 19, remeasurement of defined benefit plans is recognised in:",
    "options": [
      {
        "id": "a",
        "label": "Profit & Loss"
      },
      {
        "id": "b",
        "label": "Other Comprehensive Income (OCI)"
      },
      {
        "id": "c",
        "label": "Retained earnings"
      },
      {
        "id": "d",
        "label": "Notes only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-106",
    "prompt": "Ind AS 19 differs from AS 15 primarily because it:",
    "options": [
      {
        "id": "a",
        "label": "Prohibits actuarial valuations"
      },
      {
        "id": "b",
        "label": "Routes remeasurements to OCI"
      },
      {
        "id": "c",
        "label": "Removes discount rate requirement"
      },
      {
        "id": "d",
        "label": "Requires no disclosure"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-107",
    "prompt": "Service cost under Ind AS 19 includes:",
    "options": [
      {
        "id": "a",
        "label": "Current service cost only"
      },
      {
        "id": "b",
        "label": "Current + past service cost + curtailments"
      },
      {
        "id": "c",
        "label": "Only past service cost"
      },
      {
        "id": "d",
        "label": "Discount rate changes"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-108",
    "prompt": "Which of these costs remain in P&L under Ind AS 19?",
    "options": [
      {
        "id": "a",
        "label": "Interest cost and service cost"
      },
      {
        "id": "b",
        "label": "Remeasurements"
      },
      {
        "id": "c",
        "label": "Actuarial gains only"
      },
      {
        "id": "d",
        "label": "None"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-109",
    "prompt": "Under Ind AS 19, interest cost is computed using:",
    "options": [
      {
        "id": "a",
        "label": "Discount rate × opening DBO"
      },
      {
        "id": "b",
        "label": "Expected return on assets"
      },
      {
        "id": "c",
        "label": "Investment yield"
      },
      {
        "id": "d",
        "label": "Risk-free rate minus inflation"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-110",
    "prompt": "Remeasurements include:",
    "options": [
      {
        "id": "a",
        "label": "Actuarial gains/losses + return on plan assets excluding interest"
      },
      {
        "id": "b",
        "label": "Service cost"
      },
      {
        "id": "c",
        "label": "Past service cost"
      },
      {
        "id": "d",
        "label": "Settlement gain only"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-111",
    "prompt": "Discount rate under Ind AS 19 uses:",
    "options": [
      {
        "id": "a",
        "label": "Corporate bond yields"
      },
      {
        "id": "b",
        "label": "Government bond yields"
      },
      {
        "id": "c",
        "label": "Bank rate"
      },
      {
        "id": "d",
        "label": "HR policy recommendations"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-112",
    "prompt": "Which of the following remains a requirement under Ind AS 19?",
    "options": [
      {
        "id": "a",
        "label": "Disclosure of sensitivity analysis"
      },
      {
        "id": "b",
        "label": "Segregation of assets into equity and bonds"
      },
      {
        "id": "c",
        "label": "Expected return on plan assets"
      },
      {
        "id": "d",
        "label": "Deferred recognition of actuarial loss"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-113",
    "prompt": "Under Ind AS 19, expected return on plan assets:",
    "options": [
      {
        "id": "a",
        "label": "Is recognised in P&L"
      },
      {
        "id": "b",
        "label": "Is not separately recognised; included via discount rate"
      },
      {
        "id": "c",
        "label": "Is part of OCI"
      },
      {
        "id": "d",
        "label": "Is added to service cost"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-114",
    "prompt": "A plan amendment increasing benefits for past service gives rise to:",
    "options": [
      {
        "id": "a",
        "label": "Past service cost"
      },
      {
        "id": "b",
        "label": "Negative remeasurement"
      },
      {
        "id": "c",
        "label": "Interest cost"
      },
      {
        "id": "d",
        "label": "Settlement"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-115",
    "prompt": "Which assumption significantly influences defined benefit medical plans under Ind AS 19?",
    "options": [
      {
        "id": "a",
        "label": "Healthcare cost trend rate"
      },
      {
        "id": "b",
        "label": "Bonus payout rate"
      },
      {
        "id": "c",
        "label": "Equity indexation"
      },
      {
        "id": "d",
        "label": "PF interest rate"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-116",
    "prompt": "If retirement age assumption increases, DBO generally:",
    "options": [
      {
        "id": "a",
        "label": "Decreases"
      },
      {
        "id": "b",
        "label": "Increases"
      },
      {
        "id": "c",
        "label": "Remains same"
      },
      {
        "id": "d",
        "label": "Becomes negative"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-117",
    "prompt": "Under Ind AS 19, recognition of negative past service cost is:",
    "options": [
      {
        "id": "a",
        "label": "Immediate"
      },
      {
        "id": "b",
        "label": "Deferred"
      },
      {
        "id": "c",
        "label": "Prohibited"
      },
      {
        "id": "d",
        "label": "Recognised in OCI"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-118",
    "prompt": "Which of the following is mandatory under Ind AS 19 disclosures?",
    "options": [
      {
        "id": "a",
        "label": "Weighted average duration of obligation"
      },
      {
        "id": "b",
        "label": "Historical return table"
      },
      {
        "id": "c",
        "label": "Trust deed"
      },
      {
        "id": "d",
        "label": "Tax reconciliations"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-119",
    "prompt": "Ind AS 19 classification requires employee benefits expected to be settled within 12 months to be:",
    "options": [
      {
        "id": "a",
        "label": "Short-term benefits"
      },
      {
        "id": "b",
        "label": "Defined contribution"
      },
      {
        "id": "c",
        "label": "Termination benefit"
      },
      {
        "id": "d",
        "label": "Deferred expenses"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-120",
    "prompt": "IAS 19 discount rate requirement uses market yields on:",
    "options": [
      {
        "id": "a",
        "label": "High-quality corporate bonds"
      },
      {
        "id": "b",
        "label": "Government bonds always"
      },
      {
        "id": "c",
        "label": "Sovereign wealth funds"
      },
      {
        "id": "d",
        "label": "Company bond yields"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-121",
    "prompt": "IAS 19 requires remeasurement of defined benefit plans to be recognised in:",
    "options": [
      {
        "id": "a",
        "label": "Profit & Loss"
      },
      {
        "id": "b",
        "label": "OCI"
      },
      {
        "id": "c",
        "label": "Retained earnings"
      },
      {
        "id": "d",
        "label": "Deferred asset"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-122",
    "prompt": "Which of the following is NOT permitted under IAS 19?",
    "options": [
      {
        "id": "a",
        "label": "Smoothing of actuarial gains/losses"
      },
      {
        "id": "b",
        "label": "Discounting obligations"
      },
      {
        "id": "c",
        "label": "Using mortality tables"
      },
      {
        "id": "d",
        "label": "Recognising service cost"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-123",
    "prompt": "IAS 19 service cost includes:",
    "options": [
      {
        "id": "a",
        "label": "Current service cost only"
      },
      {
        "id": "b",
        "label": "Current + past service + settlement effects"
      },
      {
        "id": "c",
        "label": "Interest cost"
      },
      {
        "id": "d",
        "label": "Return on assets"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-124",
    "prompt": "IAS 19 disclosures require segregating:",
    "options": [
      {
        "id": "a",
        "label": "Plan assets by risk class"
      },
      {
        "id": "b",
        "label": "Mortality table code only"
      },
      {
        "id": "c",
        "label": "Tax expense"
      },
      {
        "id": "d",
        "label": "Employee count by grade"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-125",
    "prompt": "IAS 19 uses which rate to determine interest on obligation and asset?",
    "options": [
      {
        "id": "a",
        "label": "Expected return on asset"
      },
      {
        "id": "b",
        "label": "Discount rate"
      },
      {
        "id": "c",
        "label": "Investment yield"
      },
      {
        "id": "d",
        "label": "Risk-free rate"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-126",
    "prompt": "In multi-employer plans where employer’s share cannot be identified:",
    "options": [
      {
        "id": "a",
        "label": "Account as DC plan"
      },
      {
        "id": "b",
        "label": "Account as DB plan"
      },
      {
        "id": "c",
        "label": "No disclosure needed"
      },
      {
        "id": "d",
        "label": "Recognise full group obligation"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-127",
    "prompt": "Which change results in a “plan amendment” under IAS 19?",
    "options": [
      {
        "id": "a",
        "label": "Change in membership"
      },
      {
        "id": "b",
        "label": "Change in benefit formula"
      },
      {
        "id": "c",
        "label": "Change in discount rate"
      },
      {
        "id": "d",
        "label": "Salary fluctuations"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-128",
    "prompt": "“Settlement” under IAS 19 means:",
    "options": [
      {
        "id": "a",
        "label": "Employee termination"
      },
      {
        "id": "b",
        "label": "Transaction eliminating obligation"
      },
      {
        "id": "c",
        "label": "Change in actuarial assumption"
      },
      {
        "id": "d",
        "label": "Benefit enhancement"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-129",
    "prompt": "The asset ceiling under IAS 19 refers to:",
    "options": [
      {
        "id": "a",
        "label": "Only trust fund limit"
      },
      {
        "id": "b",
        "label": "Maximum surplus recoverable via refunds/reductions"
      },
      {
        "id": "c",
        "label": "Limit on investment in equity"
      },
      {
        "id": "d",
        "label": "Limit on contribution tax deduction"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-130",
    "prompt": "Under US GAAP ASC 715, actuarial gains and losses are recognised:",
    "options": [
      {
        "id": "a",
        "label": "Immediately in P&L"
      },
      {
        "id": "b",
        "label": "Initially in OCI and amortised through P&L"
      },
      {
        "id": "c",
        "label": "Never recognised"
      },
      {
        "id": "d",
        "label": "Directly in retained earnings"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-131",
    "prompt": "The “corridor approach” applies to:",
    "options": [
      {
        "id": "a",
        "label": "Immediate recognition of gains"
      },
      {
        "id": "b",
        "label": "Deferred recognition of actuarial gains/losses"
      },
      {
        "id": "c",
        "label": "Salary escalation tracking"
      },
      {
        "id": "d",
        "label": "Discount rate setting"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-132",
    "prompt": "Which of the following is TRUE under ASC 715?",
    "options": [
      {
        "id": "a",
        "label": "Expected return on assets used in P&L"
      },
      {
        "id": "b",
        "label": "No expected return recognised"
      },
      {
        "id": "c",
        "label": "Plan assets not recognised"
      },
      {
        "id": "d",
        "label": "Discount rate equals investment return"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-133",
    "prompt": "ASC 715 requires discount rate based on:",
    "options": [
      {
        "id": "a",
        "label": "Government bonds only"
      },
      {
        "id": "b",
        "label": "High-quality corporate bonds"
      },
      {
        "id": "c",
        "label": "Expected fund return"
      },
      {
        "id": "d",
        "label": "Repo rate"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-134",
    "prompt": "Under ASC 715, prior service cost is:",
    "options": [
      {
        "id": "a",
        "label": "Recognised immediately"
      },
      {
        "id": "b",
        "label": "Recognised in OCI and amortised"
      },
      {
        "id": "c",
        "label": "Not recognised"
      },
      {
        "id": "d",
        "label": "Recognised only on payment"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-135",
    "prompt": "Which benefit cost component under ASC 715 flows through net income?",
    "options": [
      {
        "id": "a",
        "label": "Service cost only"
      },
      {
        "id": "b",
        "label": "Service + interest + expected return ± amortisations"
      },
      {
        "id": "c",
        "label": "Only settlement gains"
      },
      {
        "id": "d",
        "label": "Only curtailment losses"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-136",
    "prompt": "Plan assets are measured at:",
    "options": [
      {
        "id": "a",
        "label": "Historical cost"
      },
      {
        "id": "b",
        "label": "Fair value"
      },
      {
        "id": "c",
        "label": "Book value"
      },
      {
        "id": "d",
        "label": "Discounted value"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-137",
    "prompt": "The “minimum liability adjustment” concept was replaced by:",
    "options": [
      {
        "id": "a",
        "label": "Net periodic benefit cost"
      },
      {
        "id": "b",
        "label": "Recognition of funded status on balance sheet"
      },
      {
        "id": "c",
        "label": "OCI smoothing"
      },
      {
        "id": "d",
        "label": "Mortality update"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-138",
    "prompt": "ASC 715 presentation requires funded status as:",
    "options": [
      {
        "id": "a",
        "label": "Off-balance-sheet item"
      },
      {
        "id": "b",
        "label": "Net liability/asset on balance sheet"
      },
      {
        "id": "c",
        "label": "Footnote only"
      },
      {
        "id": "d",
        "label": "Not required"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-139",
    "prompt": "Expected return on plan assets under ASC 715:",
    "options": [
      {
        "id": "a",
        "label": "Reduces net periodic cost"
      },
      {
        "id": "b",
        "label": "Increases service cost"
      },
      {
        "id": "c",
        "label": "Affects OCI only"
      },
      {
        "id": "d",
        "label": "Not used"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-140",
    "prompt": "ESOPs are accounted under which standard in India?",
    "options": [
      {
        "id": "a",
        "label": "AS 15"
      },
      {
        "id": "b",
        "label": "Ind AS 102"
      },
      {
        "id": "c",
        "label": "IAS 19"
      },
      {
        "id": "d",
        "label": "IFRS 4"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-141",
    "prompt": "Fair value of ESOPs is generally measured on:",
    "options": [
      {
        "id": "a",
        "label": "Grant date"
      },
      {
        "id": "b",
        "label": "Vesting date"
      },
      {
        "id": "c",
        "label": "Exercise date"
      },
      {
        "id": "d",
        "label": "Payment date"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-142",
    "prompt": "Which model is commonly used for fair valuation of plain-vanilla ESOPs?",
    "options": [
      {
        "id": "a",
        "label": "Discounted cash flow"
      },
      {
        "id": "b",
        "label": "Black-Scholes model"
      },
      {
        "id": "c",
        "label": "Projected unit credit method"
      },
      {
        "id": "d",
        "label": "Intrinsic value method"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-143",
    "prompt": "Market-linked performance conditions require valuation using:",
    "options": [
      {
        "id": "a",
        "label": "Black-Scholes only"
      },
      {
        "id": "b",
        "label": "Binomial or Monte Carlo models"
      },
      {
        "id": "c",
        "label": "Salary progression"
      },
      {
        "id": "d",
        "label": "Risk-free return only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-144",
    "prompt": "Under Ind AS 102, fair value of equity-settled options after grant date is:",
    "options": [
      {
        "id": "a",
        "label": "Re-measured each year"
      },
      {
        "id": "b",
        "label": "Never re-measured"
      },
      {
        "id": "c",
        "label": "Re-measured only on exercise"
      },
      {
        "id": "d",
        "label": "Re-measured for market conditions only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-145",
    "prompt": "Intrinsic value method is permitted only when:",
    "options": [
      {
        "id": "a",
        "label": "Fair value is negative"
      },
      {
        "id": "b",
        "label": "Company chooses voluntarily"
      },
      {
        "id": "c",
        "label": "Relevant guidance note allows it for unlisted companies"
      },
      {
        "id": "d",
        "label": "Employees request it"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-146",
    "prompt": "Vesting expense under ESOPs is recognised:",
    "options": [
      {
        "id": "a",
        "label": "Over vesting period"
      },
      {
        "id": "b",
        "label": "On exercise date"
      },
      {
        "id": "c",
        "label": "On grant date"
      },
      {
        "id": "d",
        "label": "On listing date"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-147",
    "prompt": "Expected volatility used in ESOP valuation should generally be based on:",
    "options": [
      {
        "id": "a",
        "label": "Peer listed companies if unlisted"
      },
      {
        "id": "b",
        "label": "Risk-free rate"
      },
      {
        "id": "c",
        "label": "Equity premium"
      },
      {
        "id": "d",
        "label": "Corporate bond rates"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-148",
    "prompt": "If employees resign before vesting, unvested ESOP expense is:",
    "options": [
      {
        "id": "a",
        "label": "Reversed"
      },
      {
        "id": "b",
        "label": "Not reversed"
      },
      {
        "id": "c",
        "label": "Deferred"
      },
      {
        "id": "d",
        "label": "Converted into cash"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-149",
    "prompt": "Cash-settled SARs are measured at:",
    "options": [
      {
        "id": "a",
        "label": "Intrinsic value only"
      },
      {
        "id": "b",
        "label": "Fair value re-measured each reporting date"
      },
      {
        "id": "c",
        "label": "Grant date fair value"
      },
      {
        "id": "d",
        "label": "Zero until exercise"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-150",
    "prompt": "Dividend yield assumption affects fair value by:",
    "options": [
      {
        "id": "a",
        "label": "Increasing fair value"
      },
      {
        "id": "b",
        "label": "Decreasing fair value for call options"
      },
      {
        "id": "c",
        "label": "Having no effect"
      },
      {
        "id": "d",
        "label": "Increasing intrinsic value only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-151",
    "prompt": "Under GN30, actuaries must:",
    "options": [
      {
        "id": "a",
        "label": "Validate share price movement"
      },
      {
        "id": "b",
        "label": "Apply appropriate valuation model and assumptions"
      },
      {
        "id": "c",
        "label": "Ignore past exercise data"
      },
      {
        "id": "d",
        "label": "Use fixed parameters"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-152",
    "prompt": "Performance-based vesting (non-market) affects:",
    "options": [
      {
        "id": "a",
        "label": "Fair value only"
      },
      {
        "id": "b",
        "label": "Vesting expense, not fair value"
      },
      {
        "id": "c",
        "label": "Share price"
      },
      {
        "id": "d",
        "label": "Discount rate"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-153",
    "prompt": "Modification increasing option value requires:",
    "options": [
      {
        "id": "a",
        "label": "No change in accounting"
      },
      {
        "id": "b",
        "label": "Recognition of incremental fair value"
      },
      {
        "id": "c",
        "label": "Reversal of expense"
      },
      {
        "id": "d",
        "label": "Treating as new grant only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-154",
    "prompt": "Employee exercise behaviour primarily affects which assumption?",
    "options": [
      {
        "id": "a",
        "label": "Dividend yield"
      },
      {
        "id": "b",
        "label": "Expected life"
      },
      {
        "id": "c",
        "label": "Volatility"
      },
      {
        "id": "d",
        "label": "Risk-free rate"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-155",
    "prompt": "Termination benefits become payable when:",
    "options": [
      {
        "id": "a",
        "label": "Employee resigns voluntarily"
      },
      {
        "id": "b",
        "label": "Company decides to terminate before normal retirement"
      },
      {
        "id": "c",
        "label": "Employee takes leave"
      },
      {
        "id": "d",
        "label": "Share price changes"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-156",
    "prompt": "Under AS 15, termination benefits are recognised when:",
    "options": [
      {
        "id": "a",
        "label": "Plan is announced and cannot realistically be withdrawn"
      },
      {
        "id": "b",
        "label": "Employee leaves"
      },
      {
        "id": "c",
        "label": "Payment is made"
      },
      {
        "id": "d",
        "label": "Auditor requests"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-157",
    "prompt": "VRS benefits are generally classified as:",
    "options": [
      {
        "id": "a",
        "label": "Post-employment benefits"
      },
      {
        "id": "b",
        "label": "Termination benefits"
      },
      {
        "id": "c",
        "label": "Other long-term benefits"
      },
      {
        "id": "d",
        "label": "Short-term benefits"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-158",
    "prompt": "Ind AS 19 requires termination benefits settled after 12 months to be:",
    "options": [
      {
        "id": "a",
        "label": "Undiscounted"
      },
      {
        "id": "b",
        "label": "Discounted"
      },
      {
        "id": "c",
        "label": "Ignored"
      },
      {
        "id": "d",
        "label": "Recognised in OCI"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-159",
    "prompt": "A one-time cash payment on restructuring leading to redundancy is:",
    "options": [
      {
        "id": "a",
        "label": "Defined benefit"
      },
      {
        "id": "b",
        "label": "Termination benefit"
      },
      {
        "id": "c",
        "label": "Short-term benefit"
      },
      {
        "id": "d",
        "label": "Share-based benefit"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-160",
    "prompt": "STI (Short-Term Incentives) payable within 12 months are classified as:",
    "options": [
      {
        "id": "a",
        "label": "Short-term employee benefits"
      },
      {
        "id": "b",
        "label": "Other long-term benefits"
      },
      {
        "id": "c",
        "label": "Defined benefit plans"
      },
      {
        "id": "d",
        "label": "Termination benefits"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-161",
    "prompt": "LTI (cash-based long-term incentives) linked to 3–5 year performance are generally:",
    "options": [
      {
        "id": "a",
        "label": "Short-term benefits"
      },
      {
        "id": "b",
        "label": "Other long-term employee benefits"
      },
      {
        "id": "c",
        "label": "Defined contribution plans"
      },
      {
        "id": "d",
        "label": "Termination benefits"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-162",
    "prompt": "A performance bonus based purely on current year profits is recognised when:",
    "options": [
      {
        "id": "a",
        "label": "Management declares intention"
      },
      {
        "id": "b",
        "label": "Obligation arises from past service and reliable estimate exists"
      },
      {
        "id": "c",
        "label": "Payment is made"
      },
      {
        "id": "d",
        "label": "Auditors approve"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-163",
    "prompt": "Under AS 15, profit-sharing plans create obligations when:",
    "options": [
      {
        "id": "a",
        "label": "Employer has realistic alternative to avoid payment"
      },
      {
        "id": "b",
        "label": "Employer has no realistic alternative to avoid payment"
      },
      {
        "id": "c",
        "label": "Auditor requires it"
      },
      {
        "id": "d",
        "label": "Tax deduction available"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-164",
    "prompt": "A long-term incentive with share settlement falls under:",
    "options": [
      {
        "id": "a",
        "label": "AS 15"
      },
      {
        "id": "b",
        "label": "Ind AS 102"
      },
      {
        "id": "c",
        "label": "Ind AS 19"
      },
      {
        "id": "d",
        "label": "IFRS 17"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-165",
    "prompt": "Discount rate under APS 27 for Indian valuations is based on:",
    "options": [
      {
        "id": "a",
        "label": "Government security yields"
      },
      {
        "id": "b",
        "label": "Equity returns"
      },
      {
        "id": "c",
        "label": "Company borrowing rate"
      },
      {
        "id": "d",
        "label": "Repo rate"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-166",
    "prompt": "Salary escalation assumption must consider which factors?",
    "options": [
      {
        "id": "a",
        "label": "Inflation, career progression, company policy"
      },
      {
        "id": "b",
        "label": "Only inflation"
      },
      {
        "id": "c",
        "label": "Only GDP growth"
      },
      {
        "id": "d",
        "label": "Bonus cycle"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-167",
    "prompt": "Withdrawal assumptions should be set based on:",
    "options": [
      {
        "id": "a",
        "label": "Auditor preference"
      },
      {
        "id": "b",
        "label": "Industry experience and company history"
      },
      {
        "id": "c",
        "label": "Tax limits"
      },
      {
        "id": "d",
        "label": "HR head approval only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-168",
    "prompt": "Mortality assumptions for Indian DB plans often use:",
    "options": [
      {
        "id": "a",
        "label": "LIC mortality tables"
      },
      {
        "id": "b",
        "label": "WHO tables"
      },
      {
        "id": "c",
        "label": "IFRS mortality table"
      },
      {
        "id": "d",
        "label": "Self-developed tables always"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-169",
    "prompt": "Which is TRUE about assumption setting under APS 27?",
    "options": [
      {
        "id": "a",
        "label": "Assumptions must be mutually consistent"
      },
      {
        "id": "b",
        "label": "Assumptions may contradict each other"
      },
      {
        "id": "c",
        "label": "No disclosure needed"
      },
      {
        "id": "d",
        "label": "Auditors decide them"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-170",
    "prompt": "Sensitivity analysis must include at minimum:",
    "options": [
      {
        "id": "a",
        "label": "Discount rate, salary escalation, withdrawals"
      },
      {
        "id": "b",
        "label": "Share price"
      },
      {
        "id": "c",
        "label": "Equity risk premium"
      },
      {
        "id": "d",
        "label": "Industry inflation only"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-171",
    "prompt": "A decrease in discount rate typically:",
    "options": [
      {
        "id": "a",
        "label": "Lowers DBO"
      },
      {
        "id": "b",
        "label": "Raises DBO"
      },
      {
        "id": "c",
        "label": "Has no impact"
      },
      {
        "id": "d",
        "label": "Creates negative liability"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-172",
    "prompt": "Attrition rate affects DB valuations because it:",
    "options": [
      {
        "id": "a",
        "label": "Changes salary level"
      },
      {
        "id": "b",
        "label": "Reduces probability of vesting and payment"
      },
      {
        "id": "c",
        "label": "Changes discount rate"
      },
      {
        "id": "d",
        "label": "Affects interest cost only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-173",
    "prompt": "Which assumption has highest impact for long-duration pension plans?",
    "options": [
      {
        "id": "a",
        "label": "Withdrawal rate"
      },
      {
        "id": "b",
        "label": "Discount rate"
      },
      {
        "id": "c",
        "label": "Salary scale"
      },
      {
        "id": "d",
        "label": "Mortality only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-174",
    "prompt": "The “expected return on assets” concept is NOT used under:",
    "options": [
      {
        "id": "a",
        "label": "AS 15"
      },
      {
        "id": "b",
        "label": "Ind AS 19"
      },
      {
        "id": "c",
        "label": "IAS 19"
      },
      {
        "id": "d",
        "label": "US GAAP"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-175",
    "prompt": "Defined benefit obligation is measured as:",
    "options": [
      {
        "id": "a",
        "label": "Undiscounted future benefits"
      },
      {
        "id": "b",
        "label": "Present value of future benefits earned to date"
      },
      {
        "id": "c",
        "label": "Fund value"
      },
      {
        "id": "d",
        "label": "Expected salary only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-176",
    "prompt": "Which of the following most directly reduces DBO?",
    "options": [
      {
        "id": "a",
        "label": "Higher discount rate"
      },
      {
        "id": "b",
        "label": "Higher salary increase"
      },
      {
        "id": "c",
        "label": "Lower withdrawals"
      },
      {
        "id": "d",
        "label": "Lower retirement age"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-177",
    "prompt": "A plan where benefits accrue uniformly with service follows which attribution method?",
    "options": [
      {
        "id": "a",
        "label": "Straight line"
      },
      {
        "id": "b",
        "label": "Projected Unit Credit"
      },
      {
        "id": "c",
        "label": "Constant dollar"
      },
      {
        "id": "d",
        "label": "Flat accrual"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-178",
    "prompt": "Actuarial gains arise when:",
    "options": [
      {
        "id": "a",
        "label": "Experience is better than assumptions"
      },
      {
        "id": "b",
        "label": "Experience is worse than assumptions"
      },
      {
        "id": "c",
        "label": "Interest cost is negative"
      },
      {
        "id": "d",
        "label": "Fund earns zero"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-179",
    "prompt": "A decrease in salary escalation assumption typically results in:",
    "options": [
      {
        "id": "a",
        "label": "Higher DBO"
      },
      {
        "id": "b",
        "label": "Lower DBO"
      },
      {
        "id": "c",
        "label": "No change"
      },
      {
        "id": "d",
        "label": "Negative DBO"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-180",
    "prompt": "Which assumption affects both DBO and service cost?",
    "options": [
      {
        "id": "a",
        "label": "Discount rate"
      },
      {
        "id": "b",
        "label": "Employee count"
      },
      {
        "id": "c",
        "label": "Fund manager fee"
      },
      {
        "id": "d",
        "label": "Tax rate"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-181",
    "prompt": "The purpose of demographic assumptions is to estimate:",
    "options": [
      {
        "id": "a",
        "label": "Future expenses"
      },
      {
        "id": "b",
        "label": "Member behavior (deaths, exits)"
      },
      {
        "id": "c",
        "label": "Investment returns"
      },
      {
        "id": "d",
        "label": "Tax deductions"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-182",
    "prompt": "Economic assumptions include:",
    "options": [
      {
        "id": "a",
        "label": "Mortality"
      },
      {
        "id": "b",
        "label": "Discount rate & salary escalation"
      },
      {
        "id": "c",
        "label": "Gender ratio"
      },
      {
        "id": "d",
        "label": "Employee service history"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-183",
    "prompt": "The liability for vested benefits is always:",
    "options": [
      {
        "id": "a",
        "label": "Higher than DBO"
      },
      {
        "id": "b",
        "label": "Lower than DBO"
      },
      {
        "id": "c",
        "label": "Equal to or lower than DBO"
      },
      {
        "id": "d",
        "label": "Not comparable to DBO"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-184",
    "prompt": "A curtailment occurs when:",
    "options": [
      {
        "id": "a",
        "label": "Benefit formula improves"
      },
      {
        "id": "b",
        "label": "Employees leave due to restructuring"
      },
      {
        "id": "c",
        "label": "Mortality table changes"
      },
      {
        "id": "d",
        "label": "Salary increases are large"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-185",
    "prompt": "Settlement accounting is required when:",
    "options": [
      {
        "id": "a",
        "label": "Obligation is eliminated substantially"
      },
      {
        "id": "b",
        "label": "Assumptions change"
      },
      {
        "id": "c",
        "label": "Interest cost changes"
      },
      {
        "id": "d",
        "label": "Employee resigns normally"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-186",
    "prompt": "The Projected Unit Credit method allocates benefit to:",
    "options": [
      {
        "id": "a",
        "label": "Beginning of employment"
      },
      {
        "id": "b",
        "label": "Only retirement date"
      },
      {
        "id": "c",
        "label": "Each year of service"
      },
      {
        "id": "d",
        "label": "Last 3 years"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-187",
    "prompt": "A trust return higher than expected results in:",
    "options": [
      {
        "id": "a",
        "label": "Actuarial gain"
      },
      {
        "id": "b",
        "label": "Actuarial loss"
      },
      {
        "id": "c",
        "label": "Past service cost"
      },
      {
        "id": "d",
        "label": "Settlement"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-188",
    "prompt": "Plan assets exclude:",
    "options": [
      {
        "id": "a",
        "label": "Investments held in trust"
      },
      {
        "id": "b",
        "label": "Insurer-managed gratuity funds"
      },
      {
        "id": "c",
        "label": "Employer-owned equity investments not in trust"
      },
      {
        "id": "d",
        "label": "Government securities in trust"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-189",
    "prompt": "A change in discount rate affects:",
    "options": [
      {
        "id": "a",
        "label": "Service cost only"
      },
      {
        "id": "b",
        "label": "DBO only"
      },
      {
        "id": "c",
        "label": "DBO and interest cost"
      },
      {
        "id": "d",
        "label": "Fund value"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-190",
    "prompt": "Which of these is *not* typically included in actuarial valuation reports?",
    "options": [
      {
        "id": "a",
        "label": "Key assumptions"
      },
      {
        "id": "b",
        "label": "Employee-level benefit table"
      },
      {
        "id": "c",
        "label": "Mortality table description"
      },
      {
        "id": "d",
        "label": "Employee Aadhaar numbers"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-191",
    "prompt": "Attribution of benefit under DB plans depends primarily on:",
    "options": [
      {
        "id": "a",
        "label": "Benefit formula"
      },
      {
        "id": "b",
        "label": "Auditor preference"
      },
      {
        "id": "c",
        "label": "Tax rules"
      },
      {
        "id": "d",
        "label": "Fund manager rate"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-192",
    "prompt": "In most DB valuations, interest cost is:",
    "options": [
      {
        "id": "a",
        "label": "Always negative"
      },
      {
        "id": "b",
        "label": "Equal to expected return on assets"
      },
      {
        "id": "c",
        "label": "DBO × discount rate"
      },
      {
        "id": "d",
        "label": "Tax-deductible only"
      }
    ],
    "answer": "c"
  },
  {
    "id": "act-193",
    "prompt": "Plan amendment decreasing future benefit accrual leads to:",
    "options": [
      {
        "id": "a",
        "label": "Past service gain"
      },
      {
        "id": "b",
        "label": "Past service cost"
      },
      {
        "id": "c",
        "label": "Settlement loss"
      },
      {
        "id": "d",
        "label": "Actuarial gain"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-194",
    "prompt": "Experience loss arises when:",
    "options": [
      {
        "id": "a",
        "label": "Withdrawals are fewer than assumed"
      },
      {
        "id": "b",
        "label": "Withdrawals exceed assumptions"
      },
      {
        "id": "c",
        "label": "Discount rate increases"
      },
      {
        "id": "d",
        "label": "Salary decreases"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-195",
    "prompt": "Funding status =",
    "options": [
      {
        "id": "a",
        "label": "Fund value − DBO"
      },
      {
        "id": "b",
        "label": "DBO × discount rate"
      },
      {
        "id": "c",
        "label": "Salary − benefit"
      },
      {
        "id": "d",
        "label": "Plan assets ÷ obligation"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-196",
    "prompt": "A funded plan with assets exceeding obligation results in:",
    "options": [
      {
        "id": "a",
        "label": "Deficit"
      },
      {
        "id": "b",
        "label": "Surplus"
      },
      {
        "id": "c",
        "label": "Curtailment"
      },
      {
        "id": "d",
        "label": "Settlement"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-197",
    "prompt": "DBO is most sensitive to which assumption in long-term plans?",
    "options": [
      {
        "id": "a",
        "label": "Mortality"
      },
      {
        "id": "b",
        "label": "Discount rate"
      },
      {
        "id": "c",
        "label": "Withdrawal rate"
      },
      {
        "id": "d",
        "label": "Spouse age"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-198",
    "prompt": "Under Ind AS 19, expected return on assets is replaced by:",
    "options": [
      {
        "id": "a",
        "label": "Actual return"
      },
      {
        "id": "b",
        "label": "Interest income on assets"
      },
      {
        "id": "c",
        "label": "Zero"
      },
      {
        "id": "d",
        "label": "Discount rate × assets"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-199",
    "prompt": "Plan participants close to retirement cause liabilities to be:",
    "options": [
      {
        "id": "a",
        "label": "Shorter duration"
      },
      {
        "id": "b",
        "label": "Longer duration"
      },
      {
        "id": "c",
        "label": "Unchanged"
      },
      {
        "id": "d",
        "label": "Converted to DC"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-200",
    "prompt": "Higher withdrawal rates generally:",
    "options": [
      {
        "id": "a",
        "label": "Increase DBO"
      },
      {
        "id": "b",
        "label": "Decrease DBO"
      },
      {
        "id": "c",
        "label": "No impact"
      },
      {
        "id": "d",
        "label": "Increase service cost"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-201",
    "prompt": "For non-Act gratuity, benefit formula is driven by:",
    "options": [
      {
        "id": "a",
        "label": "Company policy"
      },
      {
        "id": "b",
        "label": "Statutory requirement"
      },
      {
        "id": "c",
        "label": "Tax rule only"
      },
      {
        "id": "d",
        "label": "Auditor recommendation"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-202",
    "prompt": "Split disclosure of current vs non-current liability is based on:",
    "options": [
      {
        "id": "a",
        "label": "Expected benefit payments"
      },
      {
        "id": "b",
        "label": "Assumption choice"
      },
      {
        "id": "c",
        "label": "Fund value"
      },
      {
        "id": "d",
        "label": "Employee designation"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-203",
    "prompt": "An actuarial loss arises when discount rate:",
    "options": [
      {
        "id": "a",
        "label": "Increases"
      },
      {
        "id": "b",
        "label": "Decreases"
      },
      {
        "id": "c",
        "label": "Remains constant"
      },
      {
        "id": "d",
        "label": "Equals inflation"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-204",
    "prompt": "Which of the following reduces service cost?",
    "options": [
      {
        "id": "a",
        "label": "Lower salary escalation"
      },
      {
        "id": "b",
        "label": "Higher discount rate"
      },
      {
        "id": "c",
        "label": "Lower benefit formula"
      },
      {
        "id": "d",
        "label": "All of the above"
      }
    ],
    "answer": "d"
  },
  {
    "id": "act-205",
    "prompt": "Employee benefits expected to be settled within 12 months are:",
    "options": [
      {
        "id": "a",
        "label": "Short-term benefits"
      },
      {
        "id": "b",
        "label": "Termination benefits"
      },
      {
        "id": "c",
        "label": "Defined benefit"
      },
      {
        "id": "d",
        "label": "Funding requirements"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-206",
    "prompt": "Other long-term employee benefits include:",
    "options": [
      {
        "id": "a",
        "label": "Annual bonus"
      },
      {
        "id": "b",
        "label": "Leave encashment payable after 12 months"
      },
      {
        "id": "c",
        "label": "PF"
      },
      {
        "id": "d",
        "label": "ESOPs"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-207",
    "prompt": "Termination benefits are recognised when:",
    "options": [
      {
        "id": "a",
        "label": "Plan is announced and irrevocable"
      },
      {
        "id": "b",
        "label": "Employee retires"
      },
      {
        "id": "c",
        "label": "EPFO approves"
      },
      {
        "id": "d",
        "label": "Employee resigns"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-208",
    "prompt": "Share-based benefits fall under:",
    "options": [
      {
        "id": "a",
        "label": "AS 15"
      },
      {
        "id": "b",
        "label": "Ind AS 102"
      },
      {
        "id": "c",
        "label": "Ind AS 19"
      },
      {
        "id": "d",
        "label": "AS 22"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-209",
    "prompt": "Interest cost belongs to:",
    "options": [
      {
        "id": "a",
        "label": "Financing cost"
      },
      {
        "id": "b",
        "label": "Employee benefit cost"
      },
      {
        "id": "c",
        "label": "Asset revaluation"
      },
      {
        "id": "d",
        "label": "Tax expense"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-210",
    "prompt": "OCI items for DB plans under Ind AS 19 include:",
    "options": [
      {
        "id": "a",
        "label": "Service cost"
      },
      {
        "id": "b",
        "label": "Remeasurements"
      },
      {
        "id": "c",
        "label": "Interest cost"
      },
      {
        "id": "d",
        "label": "Past service cost"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-211",
    "prompt": "Profit-sharing plans under AS 15 are recognised when:",
    "options": [
      {
        "id": "a",
        "label": "Employee demands"
      },
      {
        "id": "b",
        "label": "Obligation arises with no realistic alternative"
      },
      {
        "id": "c",
        "label": "Year starts"
      },
      {
        "id": "d",
        "label": "Tax deduction available"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-212",
    "prompt": "Funded status is reported in balance sheet as:",
    "options": [
      {
        "id": "a",
        "label": "Plan assets only"
      },
      {
        "id": "b",
        "label": "Net obligation/surplus"
      },
      {
        "id": "c",
        "label": "DBO only"
      },
      {
        "id": "d",
        "label": "Footnote"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-213",
    "prompt": "Under Ind AS 19, remeasurement gain cannot be:",
    "options": [
      {
        "id": "a",
        "label": "Recognised in OCI"
      },
      {
        "id": "b",
        "label": "Taken to P&L"
      },
      {
        "id": "c",
        "label": "Accumulated in equity"
      },
      {
        "id": "d",
        "label": "Shown in disclosures"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-214",
    "prompt": "Defined contribution cost =",
    "options": [
      {
        "id": "a",
        "label": "Fund value"
      },
      {
        "id": "b",
        "label": "Contribution due for the period"
      },
      {
        "id": "c",
        "label": "DBO × discount rate"
      },
      {
        "id": "d",
        "label": "Employee share only"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-215",
    "prompt": "A benefit where employer bears actuarial risk is:",
    "options": [
      {
        "id": "a",
        "label": "Defined contribution"
      },
      {
        "id": "b",
        "label": "Defined benefit"
      },
      {
        "id": "c",
        "label": "Short-term"
      },
      {
        "id": "d",
        "label": "Termination benefit"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-216",
    "prompt": "IFRS, Ind AS and AS 15 agree that DB plans require:",
    "options": [
      {
        "id": "a",
        "label": "Actuarial valuation"
      },
      {
        "id": "b",
        "label": "No valuation"
      },
      {
        "id": "c",
        "label": "Only disclosure"
      },
      {
        "id": "d",
        "label": "Cash basis accounting"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-217",
    "prompt": "Accrued leave that lapses if unused is:",
    "options": [
      {
        "id": "a",
        "label": "Accumulating"
      },
      {
        "id": "b",
        "label": "Non-accumulating"
      },
      {
        "id": "c",
        "label": "Vesting"
      },
      {
        "id": "d",
        "label": "DC benefit"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-218",
    "prompt": "A benefit payable only on death in service is generally:",
    "options": [
      {
        "id": "a",
        "label": "Post-employment benefit"
      },
      {
        "id": "b",
        "label": "Termination benefit"
      },
      {
        "id": "c",
        "label": "Short-term benefit"
      },
      {
        "id": "d",
        "label": "Insurance benefit"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-219",
    "prompt": "Employee benefit “vesting” means:",
    "options": [
      {
        "id": "a",
        "label": "Right becomes unconditional"
      },
      {
        "id": "b",
        "label": "Benefit becomes taxable"
      },
      {
        "id": "c",
        "label": "Employee resigns"
      },
      {
        "id": "d",
        "label": "Employer withdraws policy"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-220",
    "prompt": "A gratuity scheme offering 30 days’ wages per year is:",
    "options": [
      {
        "id": "a",
        "label": "Statutory minimum"
      },
      {
        "id": "b",
        "label": "Super-statutory benefit"
      },
      {
        "id": "c",
        "label": "DC plan"
      },
      {
        "id": "d",
        "label": "Termination benefit"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-221",
    "prompt": "Medical reimbursements paid monthly are:",
    "options": [
      {
        "id": "a",
        "label": "Short-term benefits"
      },
      {
        "id": "b",
        "label": "Defined benefit"
      },
      {
        "id": "c",
        "label": "Other long-term"
      },
      {
        "id": "d",
        "label": "Termination benefit"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-222",
    "prompt": "A lump-sum paid on completion of 25 years’ service is:",
    "options": [
      {
        "id": "a",
        "label": "Long service award"
      },
      {
        "id": "b",
        "label": "Short-term bonus"
      },
      {
        "id": "c",
        "label": "Pension"
      },
      {
        "id": "d",
        "label": "DC plan"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-223",
    "prompt": "Annual bonus depending on profit is recognised when:",
    "options": [
      {
        "id": "a",
        "label": "Payment is made"
      },
      {
        "id": "b",
        "label": "Obligation exists"
      },
      {
        "id": "c",
        "label": "Employee joins"
      },
      {
        "id": "d",
        "label": "Auditor signs off"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-224",
    "prompt": "A scheme promising 1% of final salary per year of service is:",
    "options": [
      {
        "id": "a",
        "label": "DC plan"
      },
      {
        "id": "b",
        "label": "DB plan"
      },
      {
        "id": "c",
        "label": "Short-term"
      },
      {
        "id": "d",
        "label": "Hybrid"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-225",
    "prompt": "A higher discount rate:",
    "options": [
      {
        "id": "a",
        "label": "Increases obligation"
      },
      {
        "id": "b",
        "label": "Decreases obligation"
      },
      {
        "id": "c",
        "label": "No effect"
      },
      {
        "id": "d",
        "label": "Depends on mortality"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-226",
    "prompt": "Freeze of a DB plan for future hiring affects:",
    "options": [
      {
        "id": "a",
        "label": "Current service cost"
      },
      {
        "id": "b",
        "label": "All accrued service"
      },
      {
        "id": "c",
        "label": "DBO resets"
      },
      {
        "id": "d",
        "label": "Funding prohibited"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-227",
    "prompt": "Final salary DB plans assume salary increases until:",
    "options": [
      {
        "id": "a",
        "label": "Resignation"
      },
      {
        "id": "b",
        "label": "Retirement"
      },
      {
        "id": "c",
        "label": "Mid-career"
      },
      {
        "id": "d",
        "label": "Age 25"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-228",
    "prompt": "A plan with benefits based on career average salary is:",
    "options": [
      {
        "id": "a",
        "label": "DC plan"
      },
      {
        "id": "b",
        "label": "DB plan"
      },
      {
        "id": "c",
        "label": "Short-term"
      },
      {
        "id": "d",
        "label": "Termination benefit"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-229",
    "prompt": "Mortality improvement assumptions generally:",
    "options": [
      {
        "id": "a",
        "label": "Increase pension liability"
      },
      {
        "id": "b",
        "label": "Decrease liability"
      },
      {
        "id": "c",
        "label": "Not used"
      },
      {
        "id": "d",
        "label": "Increase service cost only"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-230",
    "prompt": "Defined benefit liability with longer duration is more sensitive to:",
    "options": [
      {
        "id": "a",
        "label": "Withdrawal changes"
      },
      {
        "id": "b",
        "label": "Discount rate changes"
      },
      {
        "id": "c",
        "label": "Salary changes only"
      },
      {
        "id": "d",
        "label": "Fund value"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-231",
    "prompt": "Long-term disability benefits (income replacement) are:",
    "options": [
      {
        "id": "a",
        "label": "Short-term benefits"
      },
      {
        "id": "b",
        "label": "Post-employment defined benefit"
      },
      {
        "id": "c",
        "label": "Termination benefits"
      },
      {
        "id": "d",
        "label": "DC benefits"
      }
    ],
    "answer": "b"
  },
  {
    "id": "act-232",
    "prompt": "DB plans with inflation-linked pensions require assumption on:",
    "options": [
      {
        "id": "a",
        "label": "CPI indexation"
      },
      {
        "id": "b",
        "label": "Tax inflation"
      },
      {
        "id": "c",
        "label": "Corporate inflation"
      },
      {
        "id": "d",
        "label": "None"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-233",
    "prompt": "If retirement age is reduced, DBO:",
    "options": [
      {
        "id": "a",
        "label": "Increases"
      },
      {
        "id": "b",
        "label": "Decreases"
      },
      {
        "id": "c",
        "label": "Same"
      },
      {
        "id": "d",
        "label": "Becomes DC"
      }
    ],
    "answer": "a"
  },
  {
    "id": "act-234",
    "prompt": "A plan that allows employees to choose cash or benefits is:",
    "options": [
      {
        "id": "a",
        "label": "DC plan"
      },
      {
        "id": "b",
        "label": "DB plan"
      },
      {
        "id": "c",
        "label": "Hybrid plan"
      },
      {
        "id": "d",
        "label": "Termination benefit"
      }
    ],
    "answer": "c"
  }
] as const;

export const QUESTIONS_PER_SESSION = 6;

export function pickRandomQuestions(list: Question[], count: number): Question[] {
  const pool = [...list];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
