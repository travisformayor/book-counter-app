// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.7.0;

contract Counter {
  uint256 public value;

  event Increased(uint256 newValue);

  function increase() public {
    value = value + 1;
    emit Increased(value);
  }
}