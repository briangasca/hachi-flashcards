# General format, 2D Array, array[Question #][Choice #]

import json

filename = 'questions.json'

data = {
    "question_1": {
        "question": "Which is her favorite food?",
        "choices": [
        'https://keviniscooking.com/wp-content/uploads/2024/06/Shrimp-Ceviche-Ceviche-de-Camaron-square.jpg',
          'https://www.southernliving.com/thmb/L4bpssyqv9G9KiJO0DsSUJ2OpaI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27940_SupT_Dinfortwo_624-1-4e5f07a499da4b64b6efb0beed7add01.jpg',
          'https://casamarcela.com/cdn/shop/articles/2c8b89d5d52962e1d3da3ff63ab39361_1024x.jpg?v=1642459207',
          'https://soomfoods.com/cdn/shop/articles/45_d115125d-8365-4865-af0e-5a8f42b577af_1600x.png?v=1743713461'
        ],
        "answer": 4
    },

    "question_2": {
        "question": "Which of these is her favorite place?",
        "choices": ['https://i.pinimg.com/736x/01/9e/28/019e284cc0403d16f542e527b77ff5dd.jpg',
            'https://i.pinimg.com/736x/63/51/a0/6351a09d3cdff9a16a9b1aef2cea884f.jpg',
            'https://21prd-incnet.storage.googleapis.com/wp-content/uploads/2024/12/25155046/Sampaga-1-scaled.jpg',
            'https://media.cntraveler.com/photos/5a99cfdd723a834885e156cd/16:9/w_2560%2Cc_limit/Shibuya-109-GettyImages-494984863.jpg'
            ],
        "answer": 2
    },

    "question_3": {
        "question": 'Which drink is she always getting at a restaurant?',
        "choices": [
        'https://i.ebayimg.com/images/g/CL8AAOSw5K1kHbtl/s-l1200.jpg',
             'https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/ww-hydration-hub.jpg',
             'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/ce7cdab2a86d424b94c6b871a116df03/Derivates/f6dbc2d543f27b43f64fe8fcf96872a49ec3a434.jpg',
             'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hc1/hd7/28664432328734.png'
        ],
        "answer": 1
    },

    "question_4": {
        "question": "What does she do when she is in a bad mood?",
        "choices": [
        'https://debrasmouse.com/wp-content/uploads/2020/06/feel-better-about-yourself-go-for-a-walk.jpg',
              'https://www.usnews.com/object/image/00000163-f5a9-d465-a76b-fdbdd4ad0000/180612-angry-editorial.jpg?update-time=1528835188204&size=responsive640',
              'https://media.theeverygirl.com/wp-content/uploads/2020/07/little-things-you-can-do-for-a-better-workout-the-everygirl-1.jpg',
              'https://images.squarespace-cdn.com/content/v1/5e5940b414d29b524f909bd2/1668111530540-7C14KTVNNP56MTNB1EDJ/unsplash-image-1urNubNAQbI.jpg'
        ],
        "answer": 2
    },

    "question_5": {
        "question": "What is her pet peeve?",
        "choices": [
        'https://i0.wp.com/www.additudemag.com/wp-content/uploads/2020/02/hypersensitivity-triggers-adhd-brain-woman-hates-chewing-sounds-hugging.png?resize=400%2C225px&ssl=1',
        'https://cdn.discordapp.com/attachments/461005479792082944/1376719494118113340/IMG_0584.png?ex=68365971&is=683507f1&hm=698712e641ef74d1ddb4df6587244d56924cc3c32af2efb1c61ef65ad5e1c88f&',
        'https://images.fosterwebmarketing.com/bobbattlelaw.com/ReducedBurpCartoon.jpg',
        'https://www.shutterstock.com/image-photo/fat-men-on-white-background-600w-1385368061.jpg'
        ],
        "answer": 3
    },
    
}


with open(filename, "w") as file:
    json.dump(data, file, indent=4)