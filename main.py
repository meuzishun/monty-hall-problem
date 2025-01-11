from random import randrange

doors = ['Door 1', 'Door 2', 'Door 3']

def random_door():
    return doors[randrange(3)]

# Make sure distribution is mostly even
def test_distribution():
    results = {
        'Door 1': 0,
        'Door 2': 0,
        'Door 3': 0,
    }
    
    for i in range(10000000):
        prizeDoor = random_door()
        results[prizeDoor] += 1
    
    return results

def monty_hall_problem(chosen_door, change):
    prize_door = random_door()
    
    shown_door = [door for door in doors if door != chosen_door and door != prize_door][0]
    
    if change:
        final_choice = [door for door in doors if door != chosen_door and door != shown_door][0]
    else:
        final_choice = chosen_door
    
    if final_choice == prize_door:
        result = 'win'
    else:
        result = 'loss'
    
    return {
        'chosen_door': chosen_door,
        'prize_door': prize_door,
        'shown_door': shown_door,
        'final_choice': final_choice,
        'result': result
    }
    
def test_monty_hall_problem(change, num_of_tests):
    data = {
        'wins': 0,
        'losses': 0,
        'records': [],
    }
    
    for i in range(num_of_tests):
        chosen_door = random_door()
        record = monty_hall_problem(chosen_door, change)
        
        data['records'].append(record)
        
        if record['result'] == 'win':
            data['wins'] += 1

        if record['result'] == 'loss':
            data['losses'] += 1
    
    return data

yes_change_tests = test_monty_hall_problem(True, 1000000)
no_change_tests = test_monty_hall_problem(False, 1000000)

print(f"Wins when changing answer: {yes_change_tests['wins']}")
print(f"Wins when not changing answer: {no_change_tests['wins']}")