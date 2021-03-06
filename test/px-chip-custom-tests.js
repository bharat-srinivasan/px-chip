/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe('A static chip', function() {
  let staticChip;

  beforeEach(function() {
    staticChip = fixture('static-chip');
  });

  it('displays content correctly', function(done) {
    flush(function() {
      var content = Polymer.dom(staticChip.root).querySelector('.chip__content').textContent.trim();
      expect(content).to.equal('my chip');
      done();
    });
  });

  it('updates selected state on click', function() {
    expect(staticChip.selected).to.be.false;
    MockInteractions.tap(staticChip);
    expect(staticChip.selected).to.be.true;
  });

  it('fires "px-chip-tapped" with correct detail', function(done) {
    var handleFn = sinon.spy(staticChip, '_handleTapped');
    var eventFn = sinon.stub();
    var detail = {"content":"my chip","selected":true,"contentTapped":true,"iconTapped":false};
    staticChip.addEventListener('px-chip-tapped', eventFn);

    flush(() => {
      const chipContent = Polymer.dom(staticChip.root).querySelector('.chip__content');
      MockInteractions.tap(chipContent);
      expect(handleFn).to.have.been.calledOnce;
      expect(eventFn).to.have.been.calledOnce;
      expect(eventFn.args[0][0].detail).to.deep.equal(detail);
      done();
    });
  });
});

describe('An actionable chip', function() {
  let actionableChip;

  beforeEach(function() {
    actionableChip = fixture('actionable-chip');
  });

  it('does not update selected state on click', function() {
    var isSelected = actionableChip.selected;
    MockInteractions.tap(actionableChip);
    console.log(actionableChip.selected);
    expect(actionableChip.selected).to.equal(isSelected);
  });

  it('fires "px-chip-tapped" with correct detail when chip content is tapped', function(done) {
    var handleFn = sinon.spy(actionableChip, '_handleTapped');
    var eventFn = sinon.stub();
    var detail = {"content":"chips yum","selected":false,"contentTapped":true,"iconTapped":false};
    actionableChip.addEventListener('px-chip-tapped', eventFn);

    flush(() => {
      const chipContent = Polymer.dom(actionableChip.root).querySelector('.chip__content');
      MockInteractions.tap(chipContent);
      expect(handleFn).to.have.been.calledOnce;
      expect(eventFn).to.have.been.calledOnce;
      expect(eventFn.args[0][0].detail).to.deep.equal(detail);
      done();
    });
  });

  it('fires "px-chip-tapped" with correct detail when chip icon is tapped', function(done) {
    var handleFn = sinon.spy(actionableChip, '_handleTapped');
    var eventFn = sinon.stub();
    var detail = {"content":"chips yum","selected":false,"contentTapped":false,"iconTapped":true};
    actionableChip.addEventListener('px-chip-tapped', eventFn);

    flush(() => {
      const chipButton = Polymer.dom(actionableChip.root).querySelector('.chip__button');
      MockInteractions.tap(chipButton);
      expect(handleFn).to.have.been.calledOnce;
      expect(eventFn).to.have.been.calledOnce;
      expect(eventFn.args[0][0].detail).to.deep.equal(detail);
      done();
    });
  });
});
