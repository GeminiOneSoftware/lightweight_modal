# CSS Standardiziation

The admins will not reject a pull request for not having the styles in exactly the right order, it is more of a guidline that will help make it easy to scan the styles and find what we are looking for quickly. A pull request can be denied, however, for classes not prefixed.

## All styling done with SASS (specifically SCSS)

## Name conventions

* Use BEM naming conventions
* Prefix all class names with go-lm
  * For example `go-lm__button--close`
* For all numbers that star with a decimal, add a zero in front Ex: .3333 would be 0.3333


## List of common selectors in order of precedence
  * Placeholders
  * Mixins that may have effects to override
  * Display/positioning
    * display
    * position
    * top, left, etc
  * Sizing
    * box-sizing
    * width
    * height
  * Spacing
    * margin
    * padding
  * Background
    * background and sub properties
      * including background-color and background-image
  * Font
    * font
    * color
    * line-height
    * text-align
  * Effects
    * box-shadow
    * transform
    * key-frames
    * transition
  * Mixins
    * base style mixins
    * media query mixins
    * sub-class mixins (BEM mixins)

## Examples
``` SCSS
.go-lm {
  @include e(button) { // go-lm__button
    @extend %button;
    margin: .25em;
    background-color: $color-default;
    font-family: $font-family-accent;
    color: #fcd9e9;
    text-align: center
    box-shadow: 1px 1px 0 5px #333, 0 0 2px 3px #fff        inset;
    transition: background-color 0.3s;
    @include flexy(vertical);
    @include mq(medium) { // go-lm__button--close
      flex-direction: row;
    } 
    @include m(close) {
      background-color: $color-warning;
    }
  }
  
}
