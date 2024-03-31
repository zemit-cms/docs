FROM squidfunk/mkdocs-material

RUN pip install --upgrade \
      mkdocs \
      mkdocs-material \
      mkdocs-exclude \
      mkdocs-material-extensions \
      mkdocs-minify-plugin \
      mkdocs-git-authors-plugin \
      mkdocs-git-committers-plugin \
      mkdocs-git-revision-date-localized-plugin \
      "mkdocs-material[imaging]" \
      pillow \
      cairosvg
