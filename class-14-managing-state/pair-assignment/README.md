# Pair Assignment for Class 14 - Managing Application State

Let's circle back to our UI logic... Ya know, everything that sets up the page for interaction. Now we can use our new tools of routing, middleware, MVC separation, SQL, and resource rendering.

Let's use these new tools to review the refactored components of the UI: author filter, category filter, the teaser link, and a bunch of click events.

Work with a pair to comment on the execution path for sections labeled with "COMMENT:".  These items are essentially TODO items that have been done for you and demonstrate the concepts presented during lecture this morning.  While you will not be building out any additional functionality for this assignment, you will need to describe what each newly refactored method does and where it points back to.  The navigator for this assignment should be tracing the execution path and determining what each new method/update is doing while the driver will need to summarize the navigator's thoughts into a 1-2 sentence comment (below each "COMMENT:" item).  Be sure to switch roles after 4-5 COMMENT items have been completed.

## Helpful Hints?
 - Review the `Article.findWhere` method.  This lets you grab a subset of articles by some field/value combo you pass in.
 - The "Read On" link is now a standard html link.
 - The filters now populate based on what's in the DB, not what's in the DOM: "single source of truth"
 - If there are spaces in a URL, we have replaced them with a '+'
 - This regular expression will match all whitespace in a string: `/\W+/g`

## Technical Requirements and Grading Rubric
 - Ensure your code passes ESLint.
 - Accurately comment on each COMMENT item to demonstrate your understanding of the functionality and the execution path.
