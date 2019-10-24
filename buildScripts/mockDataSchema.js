export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 30,
      "maxItems": 35,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "multipleOf": 1.0,
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        required: ['id', 'firstName', 'lastName', 'email']
      }
    }
  },
  required: ['users']
};
