export const data ={
    "current_day": "2025-04-04",
    "available_days": [
        "2025-04-04",
        "2025-04-05",
        "2025-04-06",
        "2025-04-07",
        "2025-04-08",
    ],
    "restaurant": {
        "id": 11100,
        "restaurant_name": "Супра",
        "opening_time": "11:00",
        "closing_time": "21:00",
        "timezone": "Asia/Vladivostok"
    },
    "tables": [
        {
            "id": "table-1",
            "number": "1",
            "capacity": 5,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-1-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-1-2",
                    "start_time": "2025-04-05T12:30:00+10:00",
                    "end_time": "2025-04-05T13:30:00+10:00",
                    "status": "Bill"
                },
                {
                    "id": "order-1-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 1001,
                    "name_for_reservation": "Мария",
                    "phone_number": "+70000000011",
                    "num_people": 3,
                    "seating_time": "2025-04-05T13:30:00+10:00",
                    "end_time": "2025-04-05T14:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 1002,
                    "name_for_reservation": "Иван",
                    "phone_number": "+70000000012",
                    "num_people": 4,
                    "seating_time": "2025-04-04T14:20:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 1003,
                    "name_for_reservation": "Мария",
                    "phone_number": "+70000000013",
                    "num_people": 5,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-2",
            "number": "2",
            "capacity": 6,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-2-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-2-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-2-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "Bill"
                }
            ],
            "reservations": [
                {
                    "id": 2001,
                    "name_for_reservation": "Мария",
                    "phone_number": "+70000000014",
                    "num_people": 4,
                    "seating_time": "2025-04-04T18:00:00+10:00",
                    "end_time": "2025-04-04T19:40:00+10:00",
                    "status": "Новая"
                },
                {
                    "id": 2002,
                    "name_for_reservation": "Ольга",
                    "phone_number": "+70000000015",
                    "num_people": 5,
                    "seating_time": "2025-04-04T20:10:00+10:00",
                    "end_time": "2025-04-04T20:50:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 2003,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000000016",
                    "num_people": 4,
                    "seating_time": "2025-04-04T19:30:00+10:00",
                    "end_time": "2025-04-04T20:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-3",
            "number": "3",
            "capacity": 7,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-3-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-3-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-3-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 3001,
                    "name_for_reservation": "Ольга",
                    "phone_number": "+70000000017",
                    "num_people": 2,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 3002,
                    "name_for_reservation": "Наталья",
                    "phone_number": "+70000000018",
                    "num_people": 6,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Новая"
                },
                {
                    "id": 3003,
                    "name_for_reservation": "Ольга",
                    "phone_number": "+70000000019",
                    "num_people": 5,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-4",
            "number": "4",
            "capacity": 8,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-4-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-4-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-4-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 4001,
                    "name_for_reservation": "Сергей",
                    "phone_number": "+70000000020",
                    "num_people": 3,
                    "seating_time": "2025-04-05T15:30:00+10:00",
                    "end_time": "2025-04-05T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 4002,
                    "name_for_reservation": "Катя",
                    "phone_number": "+70000000021",
                    "num_people": 3,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 4003,
                    "name_for_reservation": "Сергей",
                    "phone_number": "+70000000022",
                    "num_people": 4,
                    "seating_time": "2025-04-05T18:30:00+10:00",
                    "end_time": "2025-04-05T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-5",
            "number": "5",
            "capacity": 4,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-5-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-5-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-5-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 5001,
                    "name_for_reservation": "Иван",
                    "phone_number": "+70000000023",
                    "num_people": 4,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 5002,
                    "name_for_reservation": "Наталья",
                    "phone_number": "+70000000024",
                    "num_people": 4,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 5003,
                    "name_for_reservation": "Иван",
                    "phone_number": "+70000000025",
                    "num_people": 5,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-6",
            "number": "6",
            "capacity": 5,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-6-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-6-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-6-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 6001,
                    "name_for_reservation": "Ольга",
                    "phone_number": "+70000000026",
                    "num_people": 2,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 6002,
                    "name_for_reservation": "Наталья",
                    "phone_number": "+70000000027",
                    "num_people": 5,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 6003,
                    "name_for_reservation": "Наталья",
                    "phone_number": "+70000000028",
                    "num_people": 4,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-7",
            "number": "7",
            "capacity": 6,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-7-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-7-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-7-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 7001,
                    "name_for_reservation": "Мария",
                    "phone_number": "+70000000029",
                    "num_people": 3,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 7002,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000000030",
                    "num_people": 6,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 7003,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000000031",
                    "num_people": 5,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-8",
            "number": "8",
            "capacity": 7,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-8-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-8-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-8-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 8001,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000032",
                    "num_people": 4,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 8002,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000000033",
                    "num_people": 3,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 8003,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000034",
                    "num_people": 4,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-9",
            "number": "9",
            "capacity": 8,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-9-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-9-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-10",
            "number": "10",
            "capacity": 4,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T13:30:00+10:00",
                    "end_time": "2025-04-04T15:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-16",
            "number": "8",
            "capacity": 7,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-8-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-8-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-8-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 8001,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000032",
                    "num_people": 4,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 8002,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000000033",
                    "num_people": 3,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 8003,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000034",
                    "num_people": 4,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-15",
            "number": "9",
            "capacity": 8,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-9-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-9-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-14",
            "number": "10",
            "capacity": 4,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T13:30:00+10:00",
                    "end_time": "2025-04-04T15:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-11",
            "number": "8",
            "capacity": 7,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-8-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-8-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-8-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 8001,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000032",
                    "num_people": 4,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 8002,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000000033",
                    "num_people": 3,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 8003,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000034",
                    "num_people": 4,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-12",
            "number": "12",
            "capacity": 8,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-9-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-9-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-13",
            "number": "13",
            "capacity": 4,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T13:30:00+10:00",
                    "end_time": "2025-04-04T15:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-10",
            "number": "10",
            "capacity": 4,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T13:30:00+10:00",
                    "end_time": "2025-04-04T15:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-16",
            "number": "8",
            "capacity": 7,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-8-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-8-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-8-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 8001,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000032",
                    "num_people": 4,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 8002,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000000033",
                    "num_people": 3,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 8003,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000034",
                    "num_people": 4,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-15",
            "number": "9",
            "capacity": 8,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-9-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-9-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-14",
            "number": "10",
            "capacity": 4,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T13:30:00+10:00",
                    "end_time": "2025-04-04T15:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-11",
            "number": "8",
            "capacity": 7,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-8-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-8-2",
                    "start_time": "2025-04-04T12:30:00+10:00",
                    "end_time": "2025-04-04T13:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-8-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 8001,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000032",
                    "num_people": 4,
                    "seating_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 8002,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000000033",
                    "num_people": 3,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 8003,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000000034",
                    "num_people": 4,
                    "seating_time": "2025-04-04T18:30:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-12",
            "number": "12",
            "capacity": 8,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-9-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-9-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-13",
            "number": "13",
            "capacity": 4,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T13:30:00+10:00",
                    "end_time": "2025-04-04T15:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        }
    ]
}