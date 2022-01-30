const { handleNavigation } = require('../../utilities/preOrderQuestions')

const mockPreOrderQuestions = [
  {
    id: 1,
    position: 1,
    title: 'Are you staying in hotel room?',
    showCondition: null,
    answerOptions: [
      {
        id: 1,
        title: 'Yes',
      },
      {
        id: 2,
        title: 'No',
      },
    ],
  },
  {
    id: 2,
    position: 2,
    title: 'Please provide room number',
    showCondition: {
      answerId: 1,
    },
    answersOptions: [],
  },
  {
    id: 3,
    position: 3,
    title: 'Please add other notes',
    showCondition: null,
    answersOptions: [],
  },
]

describe('preOrderQuestions utilities -> handleNavigation', () => {
  it('"open-basket-modal" is returned if user clicks "Go back" button in the first question', () => {
    expect(handleNavigation('prev', 1, mockPreOrderQuestions, 0)).toEqual({
      data: null,
      name: 'open-basket-modal',
    })
  })
  it('if user answers "Yes" to the "Are you staying in hotel room?" question he should specify room number', () => {
    expect(
      handleNavigation(
        'next',
        {
          id: 1,
          title: 'Yes',
        },
        mockPreOrderQuestions,
        0,
        [],
        ''
      )
    ).toEqual({
      name: 'show-next-question',
      data: {
        currentQuestionIndex: 1,
        answers: [
          {
            answerId: 1,
            questionId: 1,
            answerText: 'Yes',
            answerOptionId: 1,
          },
        ],
      },
    })
  })
  it('if user answers "No" to the "Are you staying in hotel room?" question he should be taken directly to "Please add other notes" question', () => {
    expect(
      handleNavigation(
        'next',
        {
          id: 2,
          title: 'No',
        },
        mockPreOrderQuestions,
        0,
        [],
        ''
      )
    ).toEqual({
      name: 'show-next-question',
      data: {
        currentQuestionIndex: 2,
        answers: [
          {
            answerId: 2,
            questionId: 1,
            answerText: 'No',
            answerOptionId: 2,
          },
        ],
      },
    })
  })
  it('if users goes back from the "Please add other notes" question he should be taken to the "Are you staying in hotel room?" question again', () => {
    expect(
      handleNavigation(
        'prev',
        {
          id: 2,
          title: 'No',
        },
        mockPreOrderQuestions,
        2,
        [],
        'mock custom answer'
      )
    ).toEqual({
      name: 'show-prev-question',
      data: {
        currentQuestionIndex: 0,
        answers: [],
      },
    })
  })
  it('handleNavigation returns "open-confirm-modal" and answer array if user clicks "Continue" button in the last question', () => {
    expect(
      handleNavigation(
        'next',
        {
          id: 1,
          title: 'Yes',
        },
        mockPreOrderQuestions,
        2,
        [
          {
            answerText: 'Yes',
            answerOptionId: 1,
            answerId: 1,
            questionId: 1,
          },
          {
            answerText: '1',
            answerOptionId: null,
            answerId: 1,
            questionId: 2,
          },
        ],
        'mock text answer'
      )
    ).toEqual({
      name: 'open-confirm-modal',
      data: {
        currentQuestionIndex: null,
        answers: [
          {
            questionId: 1,
            answerText: 'Yes',
            answerOptionId: 1,
          },
          {
            questionId: 2,
            answerText: '1',
            answerOptionId: null,
          },
          {
            questionId: 3,
            answerText: 'mock text answer',
            answerOptionId: null,
          },
        ],
      },
    })
  })
})
