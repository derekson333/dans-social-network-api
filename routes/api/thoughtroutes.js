const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
} = require('../../controllers/thoughtcontroller');


// /api/thoughts
router.route('/').get(getAllThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<thoughtId>
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);


module.exports = router;