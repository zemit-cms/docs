import os
from pygments import styles
from pygments.formatters import HtmlFormatter

# Directory where the CSS files will be stored
output_dir = 'docs/stylesheets/pygments/'
os.makedirs(output_dir, exist_ok=True)

for style in styles.get_all_styles():
    formatter = HtmlFormatter(style=style)
    style_css = formatter.get_style_defs('.highlight')
    file_name = f'{style}.css'
    file_path = os.path.join(output_dir, file_name)

    with open(file_path, 'w') as f:
        f.write(style_css)
    print(f'Generated CSS for style: {style}')
