scoring = require('./scoring')

feedback =
  default_feedback:
    warning: ''
    suggestions: [
      'default_suggestion'
    ]

  get_feedback: (score, sequence) ->
    # starting feedback
    return @default_feedback if sequence.length == 0

    # no feedback if score is good or great.
    return if score > 2
      warning: ''
      suggestions: []

    # tie feedback to the longest match for longer sequences
    longest_match = sequence[0]
    for match in sequence[1..]
      longest_match = match if match.token.length > longest_match.token.length
    feedback = @get_match_feedback(longest_match, sequence.length == 1)
    extra_feedback = 'suggestion_too_weak'
    if feedback?
      feedback.suggestions.unshift extra_feedback
      feedback.warning = '' unless feedback.warning?
    else
      feedback =
        warning: ''
        suggestions: [extra_feedback]
    feedback

  get_match_feedback: (match, is_sole_match) ->
    switch match.pattern
      when 'dictionary'
        @get_dictionary_match_feedback match, is_sole_match

      when 'spatial'
        layout = match.graph.toUpperCase()
        warning = if match.turns == 1
          'warning_straight_rows'
        else
          'warning_short_pattern'
        warning: warning
        suggestions: [
          'suggestion_short_pattern'
        ]

      when 'repeat'
        warning = if match.base_token.length == 1
          'warning_repeat'
        else
          'warning_repeat_multichar'
        warning: warning
        suggestions: [
          'suggestion_repeat'
        ]

      when 'sequence'
        warning: 'warning_sequence'
        suggestions: [
          'suggestion_sequence'
        ]

      when 'regex'
        if match.regex_name == 'recent_year'
          warning: 'warning_recent_year'
          suggestions: [
            'suggestion_recent_year'
          ]

      when 'date'
        warning: 'warning_date'
        suggestions: [
          'suggestion_date'
        ]

  get_dictionary_match_feedback: (match, is_sole_match) ->
    warning = if match.dictionary_name == 'passwords'
      if is_sole_match and not match.l33t and not match.reversed
        if match.rank <= 10
          'warning_top_10_common_password'
        else if match.rank <= 100
          'warning_top_100_common_password'
        else
          'warning_common_password'
      else if match.guesses_log10 <= 4
        'warning_common_password_similar'
    else if match.dictionary_name == 'world_wikipedia'
      if is_sole_match
        'warning_word'
    else
      ''

    suggestions = []
    word = match.token
    if word.match(scoring.START_UPPER)
      suggestions.push 'suggestion_uppercase'
    else if word.match(scoring.ALL_UPPER) and word.toLowerCase() != word
      suggestions.push 'suggestion_all_uppercase'

    if match.reversed and match.token.length >= 4
      suggestions.push 'suggestion_reverse_word'
    if match.l33t
      suggestions.push 'suggestion_predictable_substitution'

    result =
      warning: warning
      suggestions: suggestions
    result

module.exports = feedback
