import { invert, lighten, rgba, adjust } from 'khroma';
import { mkBorder } from './theme-helpers';

class Theme {
  constructor() {
    /* Base variables */
    this.background = '#f4f4f4';
    this.primaryColor = '#E13F5E';

    this.secondaryColor = adjust(this.primaryColor, { h: 120 });
    this.secondaryColor = '#F6B4C2';
    this.tertiaryColor = adjust(this.primaryColor, { h: -160 });
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    // this.noteBorderColor = mkBorder(this.noteBkgColor, this.darkMode);

    this.primaryTextColor = invert(this.primaryColor);
    this.secondaryTextColor = invert(this.secondaryColor);
    this.tertiaryTextColor = invert(this.tertiaryColor);
    this.lineColor = invert(this.background);
    this.textColor = invert(this.background);

    this.background = 'white';
    this.mainBkg = '#E13F5E';
    this.secondBkg = '#F6B4C2';
    this.lineColor = '#2C2D32';
    this.border1 = '#F6708E';
    this.border2 = '#E3486A';
    this.arrowheadColor = '#2C2D32';
    this.fontFamily = '"trebuchet ms", verdana, arial';
    this.fontSize = '16px';
    this.labelBackground = '#e8e8e8';
    this.textColor = '#2C2D32';

    /* Flowchart variables */

    this.nodeBkg = 'calculated';
    this.nodeBorder = 'calculated';
    this.clusterBkg = 'calculated';
    this.clusterBorder = 'calculated';
    this.defaultLinkColor = 'calculated';
    this.titleColor = 'calculated';
    this.edgeLabelBackground = 'calculated';

    /* Sequence Diagram variables */

    this.actorBorder = 'calculated';
    this.actorBkg = 'calculated';
    this.actorTextColor = 'black';
    this.actorLineColor = 'grey';
    this.signalColor = 'calculated';
    this.signalTextColor = 'calculated';
    this.labelBoxBkgColor = 'calculated';
    this.labelBoxBorderColor = 'calculated';
    this.labelTextColor = 'calculated';
    this.loopTextColor = 'calculated';
    this.noteBorderColor = 'calculated';
    this.noteBkgColor = '#E13F5E';
    this.noteTextColor = 'calculated';
    this.activationBorderColor = '#2C2D32';
    this.activationBkgColor = '#F6B4C2';
    this.sequenceNumberColor = '#2C2D32';

    /* Gantt chart variables */

    this.sectionBkgColor = 'calculated';
    this.altSectionBkgColor = 'calculated';
    this.sectionBkgColor2 = 'calculated';
    this.taskBorderColor = 'calculated';
    this.taskBkgColor = 'calculated';
    this.taskTextLightColor = 'calculated';
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextDarkColor = 'calculated';
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.taskTextClickableColor = 'calculated';
    this.activeTaskBorderColor = 'calculated';
    this.activeTaskBkgColor = 'calculated';
    this.gridColor = 'calculated';
    this.doneTaskBkgColor = 'calculated';
    this.doneTaskBorderColor = 'calculated';
    this.critBorderColor = 'calculated';
    this.critBkgColor = 'calculated';
    this.todayLineColor = 'calculated';

    this.sectionBkgColor = #F6B4C2;
    this.altSectionBkgColor = 'white';
    this.sectionBkgColor2 = '#fff400';
    this.taskBorderColor = '#E13F5E';
    this.taskBkgColor = '#F6708E';
    this.taskTextLightColor = 'white';
    this.taskTextColor = 'calculated';
    this.taskTextDarkColor = 'black';
    this.taskTextOutsideColor = 'calculated';
    this.taskTextClickableColor = '#E13F5E';
    this.activeTaskBorderColor = '#E13F5E';
    this.activeTaskBkgColor = '#F6708E';
    this.gridColor = 'lightgrey';
    this.doneTaskBkgColor = 'lightgrey';
    this.doneTaskBorderColor = 'grey';
    this.critBorderColor = '#E13F5E';
    this.critBkgColor = 'red';
    this.todayLineColor = 'red';

    /* state colors */
    this.labelColor = 'black';
    this.errorBkgColor = '#552222';
    this.errorTextColor = '#552222';
    this.updateColors();
  }
  updateColors() {
    /* Flowchart variables */

    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1; // border 1
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.defaultLinkColor = this.lineColor;
    this.titleColor = this.textColor;
    this.edgeLabelBackground = this.labelBackground;

    /* Sequence Diagram variables */

    // this.actorBorder = lighten(this.border1, 0.5);
    this.actorBorder = lighten(this.border1, 23);
    this.actorBkg = this.mainBkg;
    this.labelBoxBkgColor = this.actorBkg;
    this.signalColor = this.textColor;
    this.signalTextColor = this.textColor;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.actorTextColor;
    this.loopTextColor = this.actorTextColor;
    this.noteBorderColor = this.border2;
    this.noteTextColor = this.actorTextColor;

    /* Gantt chart variables */

    this.taskTextColor = this.taskTextLightColor;
    this.taskTextOutsideColor = this.taskTextDarkColor;

    /* state colors */
    /* class */
    this.classText = this.primaryTextColor;
    /* journey */
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust(this.primaryColor, { h: 64 });
    this.fillType3 = adjust(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust(this.primaryColor, { h: -64 });
    this.fillType5 = adjust(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust(this.primaryColor, { h: 128 });
    this.fillType7 = adjust(this.secondaryColor, { h: 128 });
  }
  calculate(overrides) {
    if (typeof overrides !== 'object') {
      // Calculate colors form base colors
      this.updateColors();
      return;
    }

    const keys = Object.keys(overrides);

    // Copy values from overrides, this is mainly for base colors
    keys.forEach(k => {
      this[k] = overrides[k];
    });

    // Calculate colors form base colors
    this.updateColors();
    // Copy values from overrides again in case of an override of derived value
    keys.forEach(k => {
      this[k] = overrides[k];
    });
  }
}

export const getThemeVariables = userOverrides => {
  const theme = new Theme();
  theme.calculate(userOverrides);
  // console.info('Theme(default)', { userOverrides, theme });
  return theme;
};
