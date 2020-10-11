openapi: 3.0.0
info:
  description: Credit Card API
  version: "1.0.0"
  title: Credit Card API
  contact:
    email: youfa.faith@gmail.com
tags:
  - name: getCreditCards
    description: Get credit cards by pages
  - name: createCreditcard
    description: Create credit card by input information
  - name: getCreditCardByCardNumber
    description: Get credit cards by cardNumber

paths:
  '/creditCard':
    post:
      requestBody:
          content:
            application/json:
              schema:
                type: object
                description: order line Ids to be created for this shipment
                properties:
                 name:
                   type: string
                 cardNumber:
                   type: number
                 cvc:
                   type: number
                 expiry:
                   type: number
                   length: 4
                   example: [month/year]: 1202

      responses:
        '201':
          description: create successful
          content:
            application/json:
              schema:
                type: object
                properties:
                 name:
                   type: string
                   required: true
                 cardNumber:
                   type: number
                   required: true
                 cvc:
                   type: number
                   required: true
                 expiry:
                   type: number
                   required: true
                   example: 1202

        '400':
          description: Invalid cardNumber
      security:
        - bearerAuth: []

  '/creditCard':
    get:
      parameters:
          content:
            application/json:
              schema:
                type: object
                description: order line Ids to be created for this shipment
                parameters:
                    - in: query
                      name: page
                      schema:
                        type: integer
                        minimum: 0
                      required: true
                    - in: query
                      name: pageSize
                      required: true
                      schema:
                        type: integer
                        minimum: 20
                        maximum: 100

      responses:
        '200':
          description: get credit card list
          content:
            application/json:
              schema:
                  type: object
                  properties:
                    metadata:
                      type: object
                      properties:
                        page:
                         type: integer
                        pageSize:
                         type: integer
                        total:
                         type: integer
                        quantity:
                         type: integer
                    data:
                     type: array
                     items:
                         name:
                           type: string
                           required: true
                         cardNumber:
                           type: number
                           required: true
                         cvc:
                           type: number
                           required: true
                         expiry:
                           type: number
                           required: true
                           example: 1202

        '400':
          description: Invalid page
      security:
        - bearerAuth: []

  '/creditCard/{cardNumber}':
    get:
      parameters:
        - in: path
          name: cardNumber
          description: card number
          required: true
          schema:
            type: number

      responses:
        '200':
          description: get credit card list
          content:
            application/json:
              schema:
                  type: object
                  properties:
                     name:
                       type: string
                       required: true
                     cardNumber:
                       type: number
                       required: true
                     cvc:
                       type: number
                       required: true
                     expiry:
                       type: number
                       required: true
                       example: 1202

        '400':
          description: Invalid card number
      security:
        - bearerAuth: []