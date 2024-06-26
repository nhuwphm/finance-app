// Create a validation for categories using zod

const z = require('zod');


const categorySchema = z.object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255).optional(),
    createdAt: z.string().optional(),
});

module.exports = categorySchema;