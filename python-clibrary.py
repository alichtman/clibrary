import click
import colorama

def print_section_header(title, color):
	"""Prints variable sized section header"""
	block = "#" * (len(title) + 2)
	print(color + Style.BRIGHT + block)
	print("#", title)
	print(block + "\n" + Style.RESET_ALL)


def prompt_yes_no(message, color):
	"""Print question and return True or False depending on user selection from list.
	bottom_line should be used for one liners. Otherwise, it's the second line you want printed."""
	questions = [inquirer.List('choice',
	                           message=color + Style.BRIGHT + message + Fore.BLUE,
	                           choices=[' Yes', ' No'],
	                           ),
	             ]

	answers = inquirer.prompt(questions)
	return answers.get('choice').strip().lower() == 'yes'

# Click Examples

# custom help options
@click.command(context_settings=dict(help_option_names=['-h', '-help']))

# boolean option
@click.option('-old_path', is_flag=True, default=False, help="Decline setting new backup directory path.")

# input argument
@click.option('--new_path', default="DEFAULT", help="Input a new backup directory path.")

