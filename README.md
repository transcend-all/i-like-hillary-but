# Evan's Note

This is a website I worked on during my time volunteering with DevProgress, a pro-Democratic Party volunteer coding organization, during the 2016 Presidential campaign. I was about three weeks into my coursework at Bloc when I started working on this, and I had never worked on a professionally built website before. Thus, the vast majority of the content was created by other people, and my contributions amount to a few CSS adjustments and segments of a few written articles (on foreign policy in Honduras and Iran).

Although I was only an inexperienced member of a large team, I learned many valuable lessons while working with DevProgress. First and foremost, I learned how to fork a Git repository, make my own changes, and submit pull requests. This site uses Jekyll Server, which is a technology I first learned while working on this project. Furthermore, I had been a lifelong Windows user up until my time volunteering for DevProgess, and it was during my time volunteering that I decided to finally make the switch to Zorin OS, an Ubuntu-based Linux distribution designed to incoporate the best features of Windows into the Linux environment.

This project gave me some invaluable practical experience working in a professional setting with a web development team for the first time. Even though we all know how that election went, I remain proud that I put in this effort to support Hillary Clinton's candidacy.

What follows is the official readme for the project.

# "I'd vote for Hillary, But..." | Hillary Clinton Myths

A website to refute myths and misconceptions about Hillary Clinton. The live version is at https://hillarymyths.org.

## Set up
You can skip this step if you already have Ruby and Bundler installed.

1. Get Ruby. Note that these instructions are for OS X 10.6+ only, which comes with Ruby, but it's used for system's own purposes. Follow these steps to avoid mucking with that Ruby's config.
    1. Install [homebrew](http://brew.sh/)
    2. Run `brew update`
    3. Run `brew install rbenv`
    4. Follow [instructions](https://github.com/rbenv/rbenv#installing-ruby-gems) to hook `rbenv` into your shell. Basically, you'll need to run `rbenv init` and then add something like `eval "$(rbenv init -)"` to your `~/.bash_profile`.
    5. Run `rbenv install 2.3.1`
    6. Run `rbenv shell 2.3.1`
    7. Run `ruby --version`. You should see something like
        ```
           ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]
        ```
2. Get Bundler by running `gem install bundler`.
3. Run `bundle install` in the project folder i.e. i-like-hillary-but to install project dependencies.

## Develop
1. Run `bundle exec jekyll serve` to start a local server.
2. Copy/paste the server address into your favorite browser's address bar.
3. You should see the built site.
4. Making changes to the source will automatically regenerate Jekyll content.
5. Refresh the page to see the changes.

## Test
1. Run `rake`. This exact thing will happen automatically when you post a pull request. As a result, your pull request will either have the "All checks passed" or "All checks failed" from a mysterious Travis CI. If you get an error, click on `Details` to see the results of the test run.
2. When the test fails, it usually comes up with a list of errors. Here's a handy guide to some errors:
    1. The `404 No error` message means that the link in your article is likely leading to a dead end. Please double-check the link.
    2. The `302 Number of redirects hit maximum amount` error sometimes happens when the site you're linking to takes special measures to protect against bots (such as the link-checker in our test).
3. If you are satisfied with your check, but the error still appears, you can suppress it by adding the `{:data-proofer-ignore="true"}` incantation at the end of the link markdown. For example:

```
... Well, [one study](http://psycnet.apa.org/journals/emo/9/5/649/){:data-proofer-ignore="true"} indicates ...
```


## Contributing

Content, UI design, and frontend code contributions are welcome. Please see [our list of open issues](https://github.com/DevProgress/i-like-hillary-but/issues). Please see our [Contribution Guide](CONTRIBUTING.md) for more detail. The guide also covers the [DevProgress code of conduct](https://github.com/DevProgress/code-of-conduct) and the [DevProgress Contributor Agreement](https://github.com/DevProgress/contributor-agreement).
