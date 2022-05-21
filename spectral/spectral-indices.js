/*
===========
MIT License
===========

Copyright (c) 2021 David Montero Loaiza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

=================
GitHub Repository
=================

spectral module: https://github.com/awesome-spectral-indices/spectral
Awesome Spectral Indices: https://github.com/awesome-spectral-indices/awesome-spectral-indices
*/

/*
==========
Attributes
==========
*/

var spectralIndices = {
    'SpectralIndices': {
        'AFRI1600': {
            'application_domain': 'vegetation',
            'bands': ['N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-17',
            'formula': '(N - 0.66 * S1) / (N + 0.66 * S1)',
            'long_name': 'Aerosol Free Vegetation Index (1600 nm)',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/S0034-4257(01)00190-0',
            'short_name': 'AFRI1600'
        },
        'AFRI2100': {
            'application_domain': 'vegetation',
            'bands': ['N', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-17',
            'formula': '(N - 0.5 * S2) / (N + 0.5 * S2)',
            'long_name': 'Aerosol Free Vegetation Index (2100 nm)',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/S0034-4257(01)00190-0',
            'short_name': 'AFRI2100'
        },
        'ARI': {
            'application_domain': 'vegetation',
            'bands': ['G', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-20',
            'formula': '(1 / G) - (1 / RE1)',
            'long_name': 'Anthocyanin Reflectance Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1562/0031-8655(2001)074%3C0038:OPANEO%3E2.0.CO;2',
            'short_name': 'ARI'
        },
        'ARI2': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'N * ((1 / G) - (1 / RE1))',
            'long_name': 'Anthocyanin Reflectance Index 2',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1562/0031-8655(2001)074%3C0038:OPANEO%3E2.0.CO;2',
            'short_name': 'ARI2'
        },
        'ARVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'gamma', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-11',
            'formula': '(N - (R - gamma * (R - B))) / (N + (R - gamma * (R - B)))',
            'long_name': 'Atmospherically Resistant Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1109/36.134076',
            'short_name': 'ARVI'
        },
        'ATSAVI': {
            'application_domain': 'vegetation',
            'bands': ['sla', 'N', 'R', 'slb'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': 'sla * (N - sla * R - slb) / (sla * N + R - sla * slb + 0.08 * (1 + sla ** 2.0))',
            'long_name': 'Adjusted Transformed Soil-Adjusted Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(91)90009-U',
            'short_name': 'ATSAVI'
        },
        'AVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(N * (1.0 - R) * (N - R)) ** (1/3)',
            'long_name': 'Advanced Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.465.8749&rep=rep1&type=pdf',
            'short_name': 'AVI'
        },
        'AWEInsh': {
            'application_domain': 'water',
            'bands': ['G', 'S1', 'N', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '4.0 * (G - S1) - 0.25 * N + 2.75 * S2',
            'long_name': 'Automated Water Extraction Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.rse.2013.08.029',
            'short_name': 'AWEInsh'
        },
        'AWEIsh': {
            'application_domain': 'water',
            'bands': ['B', 'G', 'N', 'S1', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': 'B + 2.5 * G - 1.5 * (N + S1) - 0.25 * S2',
            'long_name': 'Automated Water Extraction Index with Shadows Elimination',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.rse.2013.08.029',
            'short_name': 'AWEIsh'
        },
        'BAI': {
            'application_domain': 'burn',
            'bands': ['R', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '1.0 / ((0.1 - R) ** 2.0 + (0.06 - N) ** 2.0)',
            'long_name': 'Burned Area Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://digital.csic.es/bitstream/10261/6426/1/Martin_Isabel_Serie_Geografica.pdf',
            'short_name': 'BAI'
        },
        'BAIM': {
            'application_domain': 'burn',
            'bands': ['N', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-20',
            'formula': '1.0/((0.05 - N) ** 2.0) + ((0.2 - S2) ** 2.0)',
            'long_name': 'Burned Area Index adapted to MODIS',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.foreco.2006.08.248',
            'short_name': 'BAIM'
        },
        'BAIS2': {
            'application_domain': 'burn',
            'bands': ['RE2', 'RE3', 'N2', 'R', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(1.0 - ((RE2 * RE3 * N2) / R) ** 0.5) * (((S2 - N2)/(S2 + N2) ** 0.5) + 1.0)',
            'long_name': 'Burned Area Index for Sentinel 2',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.3390/ecrs-2-05177',
            'short_name': 'BAIS2'
        },
        'BCC': {
            'application_domain': 'vegetation',
            'bands': ['B', 'R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-17',
            'formula': 'B / (R + G + B)',
            'long_name': 'Blue Chromatic Coordinate',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(87)90088-5',
            'short_name': 'BCC'
        },
        'BI': {
            'application_domain': 'urban',
            'bands': ['S1', 'R', 'N', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '((S1 + R) - (N + B))/((S1 + R) + (N + B))',
            'long_name': 'Bare Soil Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.465.8749&rep=rep1&type=pdf',
            'short_name': 'BI'
        },
        'BLFEI': {
            'application_domain': 'urban',
            'bands': ['G', 'R', 'S2', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-02-09',
            'formula': '(((G+R+S2)/3.0)-S1)/(((G+R+S2)/3.0)+S1)',
            'long_name': 'Built-Up Land Features Extraction Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1080/10106049.2018.1497094',
            'short_name': 'BLFEI'
        },
        'BNDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'B'],
            'contributor': 'https://github.com/MATRIX4284',
            'date_of_addition': '2021-04-07',
            'formula': '(N - B)/(N + B)',
            'long_name': 'Blue Normalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/S1672-6308(07)60027-4',
            'short_name': 'BNDVI'
        },
        'BWDRVI': {
            'application_domain': 'vegetation',
            'bands': ['alpha', 'N', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-20',
            'formula': '(alpha * N - B) / (alpha * N + B)',
            'long_name': 'Blue Wide Dynamic Range Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.2135/cropsci2007.01.0031',
            'short_name': 'BWDRVI'
        },
        'BaI': {
            'application_domain': 'urban',
            'bands': ['R', 'S1', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': 'R + S1 - N',
            'long_name': 'Bareness Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1109/IGARSS.2005.1525743',
            'short_name': 'BaI'
        },
        'CIG': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N / G) - 1.0',
            'long_name': 'Chlorophyll Index Green',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1078/0176-1617-00887',
            'short_name': 'CIG'
        },
        'CIRE': {
            'application_domain': 'vegetation',
            'bands': ['N', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-13',
            'formula': '(N / RE1) - 1',
            'long_name': 'Chlorophyll Index Red Edge',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1078/0176-1617-00887',
            'short_name': 'CIRE'
        },
        'CSI': {
            'application_domain': 'burn',
            'bands': ['N', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': 'N/S2',
            'long_name': 'Char Soil Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.rse.2005.04.014',
            'short_name': 'CSI'
        },
        'CSIT': {
            'application_domain': 'burn',
            'bands': ['N', 'S2', 'T1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': 'N / (S2 * T1 / 10000.0)',
            'long_name': 'Char Soil Index Thermal',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.1080/01431160600954704',
            'short_name': 'CSIT'
        },
        'CVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N * R) / (G ** 2.0)',
            'long_name': 'Chlorophyll Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1007/s11119-010-9204-3',
            'short_name': 'CVI'
        },
        'DBI': {
            'application_domain': 'urban',
            'bands': ['B', 'T1', 'N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '((B - T1)/(B + T1)) - ((N - R)/(N + R))',
            'long_name': 'Dry Built-Up Index',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.3390/land7030081',
            'short_name': 'DBI'
        },
        'DBSI': {
            'application_domain': 'urban',
            'bands': ['S1', 'G', 'N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '((S1 - G)/(S1 + G)) - ((N - R)/(N + R))',
            'long_name': 'Dry Bareness Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/land7030081',
            'short_name': 'DBSI'
        },
        'DPDD': {
            'application_domain': 'radar',
            'bands': ['VV', 'VH'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': '(VV + VH)/2.0 ** 0.5',
            'long_name': 'Dual-Pol Diagonal Distance',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.1016/j.rse.2018.09.003',
            'short_name': 'DPDD'
        },
        'DVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': 'N - R',
            'long_name': 'Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(94)00114-3',
            'short_name': 'DVI'
        },
        'DVIplus': {
            'application_domain': 'vegetation',
            'bands': ['lambdaN', 'lambdaR', 'lambdaG', 'G', 'N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-20',
            'formula': '((lambdaN - lambdaR)/(lambdaN - lambdaG)) * G + (1.0 - ((lambdaN - lambdaR)/(lambdaN - lambdaG))) * N - R',
            'long_name': 'Difference Vegetation Index Plus',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2019.03.028',
            'short_name': 'DVIplus'
        },
        'DpRVIHH': {
            'application_domain': 'radar',
            'bands': ['HV', 'HH'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-12-25',
            'formula': '(4.0 * HV)/(HH + HV)',
            'long_name': 'Dual-Polarized Radar Vegetation Index HH',
            'platforms': ['Sentinel-1 (Dual Polarisation HH-HV)'],
            'reference': 'https://www.tandfonline.com/doi/abs/10.5589/m12-043',
            'short_name': 'DpRVIHH'
        },
        'DpRVIVV': {
            'application_domain': 'radar',
            'bands': ['VH', 'VV'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-12-25',
            'formula': '(4.0 * VH)/(VV + VH)',
            'long_name': 'Dual-Polarized Radar Vegetation Index VV',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.3390/app9040655',
            'short_name': 'DpRVIVV'
        },
        'EBBI': {
            'application_domain': 'urban',
            'bands': ['S1', 'N', 'T1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-17',
            'formula': '(S1 - N) / (10.0 * ((S1 + T1) ** 0.5))',
            'long_name': 'Enhanced Built-Up and Bareness Index',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.3390/rs4102957',
            'short_name': 'EBBI'
        },
        'EMBI': {
            'application_domain': 'urban',
            'bands': ['S1', 'S2', 'N', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '((((S1 - S2 - N)/(S1 + S2 + N)) + 0.5) - ((G - S1)/(G + S1)) - 0.5)/((((S1 - S2 - N)/(S1 + S2 + N)) + 0.5) + ((G - S1)/(G + S1)) + 1.5)',
            'long_name': 'Enhanced Modified Bare Soil Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.jag.2022.102703',
            'short_name': 'EMBI'
        },
        'EVI': {
            'application_domain': 'vegetation',
            'bands': ['g', 'N', 'R', 'C1', 'C2', 'B', 'L'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': 'g * (N - R) / (N + C1 * R - C2 * B + L)',
            'long_name': 'Enhanced Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/S0034-4257(96)00112-5',
            'short_name': 'EVI'
        },
        'EVI2': {
            'application_domain': 'vegetation',
            'bands': ['g', 'N', 'R', 'L'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': 'g * (N - R) / (N + 2.4 * R + L)',
            'long_name': 'Two-Band Enhanced Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2008.06.006',
            'short_name': 'EVI2'
        },
        'ExG': {
            'application_domain': 'vegetation',
            'bands': ['G', 'R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '2 * G - R - B',
            'long_name': 'Excess Green Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.13031/2013.27838',
            'short_name': 'ExG'
        },
        'ExGR': {
            'application_domain': 'vegetation',
            'bands': ['G', 'R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(2.0 * G - R - B) - (1.3 * R - G)',
            'long_name': 'ExG - ExR Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.compag.2008.03.009',
            'short_name': 'ExGR'
        },
        'ExR': {
            'application_domain': 'vegetation',
            'bands': ['R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '1.3 * R - G',
            'long_name': 'Excess Red Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1117/12.336896',
            'short_name': 'ExR'
        },
        'FCVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'G', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-20',
            'formula': 'N - ((R + G + B)/3.0)',
            'long_name': 'Fluorescence Correction Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2020.111676',
            'short_name': 'FCVI'
        },
        'GARI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'B', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - (G - (B - R))) / (N - (G + (B - R)))',
            'long_name': 'Green Atmospherically Resistant Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/S0034-4257(96)00072-7',
            'short_name': 'GARI'
        },
        'GBNDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - (G + B))/(N + (G + B))',
            'long_name': 'Green-Blue Normalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/S1672-6308(07)60027-4',
            'short_name': 'GBNDVI'
        },
        'GCC': {
            'application_domain': 'vegetation',
            'bands': ['G', 'R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-17',
            'formula': 'G / (R + G + B)',
            'long_name': 'Green Chromatic Coordinate',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(87)90088-5',
            'short_name': 'GCC'
        },
        'GDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'nexp', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '((N ** nexp) - (R ** nexp)) / ((N ** nexp) + (R ** nexp))',
            'long_name': 'Generalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.3390/rs6021211',
            'short_name': 'GDVI'
        },
        'GEMI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '((2.0*((N ** 2.0)-(R ** 2.0)) + 1.5*N + 0.5*R)/(N + R + 0.5))*(1.0 - 0.25*((2.0 * ((N ** 2.0) - (R ** 2)) + 1.5 * N + 0.5 * R)/(N + R + 0.5)))-((R - 0.125)/(1 - R))',
            'long_name': 'Global Environment Monitoring Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'http://dx.doi.org/10.1007/bf00031911',
            'short_name': 'GEMI'
        },
        'GLI': {
            'application_domain': 'vegetation',
            'bands': ['G', 'R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(2.0 * G - R - B) / (2.0 * G + R + B)',
            'long_name': 'Green Leaf Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'http://dx.doi.org/10.1080/10106040108542184',
            'short_name': 'GLI'
        },
        'GM1': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'RE2/G',
            'long_name': 'Gitelson and Merzlyak Index 1',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0176-1617(96)80284-7',
            'short_name': 'GM1'
        },
        'GM2': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'RE2/RE1',
            'long_name': 'Gitelson and Merzlyak Index 2',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0176-1617(96)80284-7',
            'short_name': 'GM2'
        },
        'GNDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - G)/(N + G)',
            'long_name': 'Green Normalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/S0034-4257(96)00072-7',
            'short_name': 'GNDVI'
        },
        'GOSAVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(N - G) / (N + G + 0.16)',
            'long_name': 'Green Optimized Soil Adjusted Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.2134/agronj2004.0314',
            'short_name': 'GOSAVI'
        },
        'GRNDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - (G + R))/(N + (G + R))',
            'long_name': 'Green-Red Normalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/S1672-6308(07)60027-4',
            'short_name': 'GRNDVI'
        },
        'GRVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'N/G',
            'long_name': 'Green Ratio Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.2134/agronj2004.0314',
            'short_name': 'GRVI'
        },
        'GSAVI': {
            'application_domain': 'vegetation',
            'bands': ['L', 'N', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(1.0 + L) * (N - G) / (N + G + L)',
            'long_name': 'Green Soil Adjusted Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.2134/agronj2004.0314',
            'short_name': 'GSAVI'
        },
        'GVMI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '((N + 0.1) - (S2 + 0.02)) / ((N + 0.1) + (S2 + 0.02))',
            'long_name': 'Global Vegetation Moisture Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/S0034-4257(02)00037-8',
            'short_name': 'GVMI'
        },
        'IAVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'gamma', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(N - (R - gamma * (B - R)))/(N + (R - gamma * (B - R)))',
            'long_name': 'New Atmospherically Resistant Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://www.jipb.net/EN/abstract/abstract23925.shtml',
            'short_name': 'IAVI'
        },
        'IBI': {
            'application_domain': 'urban',
            'bands': ['S1', 'N', 'R', 'L', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-02-09',
            'formula': '(((S1-N)/(S1+N))-(((N-R)*(1.0+L)/(N+R+L))+((G-S1)/(G+S1)))/2.0)/(((S1-N)/(S1+N))+(((N-R)*(1.0+L)/(N+R+L))+((G-S1)/(G+S1)))/2.0)',
            'long_name': 'Index-Based Built-Up Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1080/01431160802039957',
            'short_name': 'IBI'
        },
        'IKAW': {
            'application_domain': 'vegetation',
            'bands': ['R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(R - B)/(R + B)',
            'long_name': 'Kawashima Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1006/anbo.1997.0544',
            'short_name': 'IKAW'
        },
        'IPVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'N/(N + R)',
            'long_name': 'Infrared Percentage Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(90)90085-Z',
            'short_name': 'IPVI'
        },
        'IRECI': {
            'application_domain': 'vegetation',
            'bands': ['RE3', 'R', 'RE1', 'RE2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-17',
            'formula': '(RE3 - R) / (RE1 / RE2)',
            'long_name': 'Inverted Red-Edge Chlorophyll Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/j.isprsjprs.2013.04.007',
            'short_name': 'IRECI'
        },
        'LSWI': {
            'application_domain': 'water',
            'bands': ['N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-20',
            'formula': '(N - S1)/(N + S1)',
            'long_name': 'Land Surface Water Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.rse.2003.11.008',
            'short_name': 'LSWI'
        },
        'MBI': {
            'application_domain': 'urban',
            'bands': ['S1', 'S2', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '((S1 - S2 - N)/(S1 + S2 + N)) + 0.5',
            'long_name': 'Modified Bare Soil Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/land10030231',
            'short_name': 'MBI'
        },
        'MBWI': {
            'application_domain': 'water',
            'bands': ['omega', 'G', 'R', 'N', 'S1', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-17',
            'formula': '(omega * G) - R - N - S1 - S2',
            'long_name': 'Multi-Band Water Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.jag.2018.01.018',
            'short_name': 'MBWI'
        },
        'MCARI': {
            'application_domain': 'vegetation',
            'bands': ['RE1', 'R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-13',
            'formula': '((RE1 - R) - 0.2 * (RE1 - G)) * (RE1 / R)',
            'long_name': 'Modified Chlorophyll Absorption in Reflectance Index',
            'platforms': ['Sentinel-2'],
            'reference': 'http://dx.doi.org/10.1016/S0034-4257(00)00113-9',
            'short_name': 'MCARI'
        },
        'MCARI1': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '1.2 * (2.5 * (N - R) - 1.3 * (N - G))',
            'long_name': 'Modified Chlorophyll Absorption in Reflectance Index 1',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2003.12.013',
            'short_name': 'MCARI1'
        },
        'MCARI2': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '(1.5 * (2.5 * (N - R) - 1.3 * (N - G))) / ((((2.0 * N + 1) ** 2) - (6.0 * N - 5 * (R ** 0.5)) - 0.5) ** 0.5)',
            'long_name': 'Modified Chlorophyll Absorption in Reflectance Index 2',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2003.12.013',
            'short_name': 'MCARI2'
        },
        'MCARI705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': '((RE2 - RE1) - 0.2 * (RE2 - G)) * (RE2 / RE1)',
            'long_name': 'Modified Chlorophyll Absorption in Reflectance Index (705 and 750 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/j.agrformet.2008.03.005',
            'short_name': 'MCARI705'
        },
        'MCARIOSAVI': {
            'application_domain': 'vegetation',
            'bands': ['RE1', 'R', 'G', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': '(((RE1 - R) - 0.2 * (RE1 - G)) * (RE1 / R)) / (1.16 * (N - R) / (N + R + 0.16))',
            'long_name': 'MCARI/OSAVI Ratio',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(00)00113-9',
            'short_name': 'MCARIOSAVI'
        },
        'MCARIOSAVI705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': '(((RE2 - RE1) - 0.2 * (RE2 - G)) * (RE2 / RE1)) / (1.16 * (RE2 - RE1) / (RE2 + RE1 + 0.16))',
            'long_name': 'MCARI/OSAVI Ratio (705 and 750 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/j.agrformet.2008.03.005',
            'short_name': 'MCARIOSAVI705'
        },
        'MGRVI': {
            'application_domain': 'vegetation',
            'bands': ['G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '(G ** 2.0 - R ** 2.0) / (G ** 2.0 + R ** 2.0)',
            'long_name': 'Modified Green Red Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.jag.2015.02.012',
            'short_name': 'MGRVI'
        },
        'MIRBI': {
            'application_domain': 'burn',
            'bands': ['S2', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': '10.0 * S2 - 9.8 * S1 + 2.0',
            'long_name': 'Mid-Infrared Burn Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1080/01431160110053185',
            'short_name': 'MIRBI'
        },
        'MLSWI26': {
            'application_domain': 'water',
            'bands': ['N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-20',
            'formula': '(1.0 - N - S1)/(1.0 - N + S1)',
            'long_name': 'Modified Land Surface Water Index (MODIS Bands 2 and 6)',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs71215805',
            'short_name': 'MLSWI26'
        },
        'MLSWI27': {
            'application_domain': 'water',
            'bands': ['N', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-20',
            'formula': '(1.0 - N - S2)/(1.0 - N + S2)',
            'long_name': 'Modified Land Surface Water Index (MODIS Bands 2 and 7)',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs71215805',
            'short_name': 'MLSWI27'
        },
        'MNDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - S2)/(N + S2)',
            'long_name': 'Modified Normalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1080/014311697216810',
            'short_name': 'MNDVI'
        },
        'MNDWI': {
            'application_domain': 'water',
            'bands': ['G', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(G - S1) / (G + S1)',
            'long_name': 'Modified Normalized Difference Water Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1080/01431160600589179',
            'short_name': 'MNDWI'
        },
        'MNLI': {
            'application_domain': 'vegetation',
            'bands': ['L', 'N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-11',
            'formula': '(1 + L)*((N ** 2) - R)/((N ** 2) + R + L)',
            'long_name': 'Modified Non-Linear Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1109/TGRS.2003.812910',
            'short_name': 'MNLI'
        },
        'MRBVI': {
            'application_domain': 'vegetation',
            'bands': ['R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(R ** 2.0 - B ** 2.0)/(R ** 2.0 + B ** 2.0)',
            'long_name': 'Modified Red Blue Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.3390/s20185055',
            'short_name': 'MRBVI'
        },
        'MSAVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-13',
            'formula': '0.5 * (2.0 * N + 1 - (((2 * N + 1) ** 2) - 8 * (N - R)) ** 0.5)',
            'long_name': 'Modified Soil-Adjusted Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(94)90134-1',
            'short_name': 'MSAVI'
        },
        'MSI': {
            'application_domain': 'vegetation',
            'bands': ['S1', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'S1/N',
            'long_name': 'Moisture Stress Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/0034-4257(89)90046-1',
            'short_name': 'MSI'
        },
        'MSR': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '(N / R - 1) / ((N / R + 1) ** 0.5)',
            'long_name': 'Modified Simple Ratio',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1080/07038992.1996.10855178',
            'short_name': 'MSR'
        },
        'MSR705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': '(RE2 / RE1 - 1) / ((RE2 / RE1 + 1) ** 0.5)',
            'long_name': 'Modified Simple Ratio (705 and 750 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/j.agrformet.2008.03.005',
            'short_name': 'MSR705'
        },
        'MTCI': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-13',
            'formula': '(RE2 - RE1) / (RE1 - R)',
            'long_name': 'MERIS Terrestrial Chlorophyll Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1080/0143116042000274015',
            'short_name': 'MTCI'
        },
        'MTVI1': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '1.2 * (1.2 * (N - G) - 2.5 * (R - G))',
            'long_name': 'Modified Triangular Vegetation Index 1',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2003.12.013',
            'short_name': 'MTVI1'
        },
        'MTVI2': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '(1.5 * (1.2 * (N - G) - 2.5 * (R - G))) / ((((2.0 * N + 1) ** 2) - (6.0 * N - 5 * (R ** 0.5)) - 0.5) ** 0.5)',
            'long_name': 'Modified Triangular Vegetation Index 2',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2003.12.013',
            'short_name': 'MTVI2'
        },
        'MuWIR': {
            'application_domain': 'water',
            'bands': ['B', 'G', 'N', 'S2', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-09',
            'formula': '-4.0 * ((B - G)/(B + G)) + 2.0 * ((G - N)/(G + N)) + 2.0 * ((G - S2)/(G + S2)) - ((G - S1)/(G + S1))',
            'long_name': 'Revised Multi-Spectral Water Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs10101643',
            'short_name': 'MuWIR'
        },
        'NBLI': {
            'application_domain': 'urban',
            'bands': ['R', 'T1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '(R - T1)/(R + T1)',
            'long_name': 'Normalized Difference Bare Land Index',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.3390/rs9030249',
            'short_name': 'NBLI'
        },
        'NBR': {
            'application_domain': 'burn',
            'bands': ['N', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - S2) / (N + S2)',
            'long_name': 'Normalized Burn Ratio',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3133/ofr0211',
            'short_name': 'NBR'
        },
        'NBR2': {
            'application_domain': 'burn',
            'bands': ['S1', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-20',
            'formula': '(S1 - S2) / (S1 + S2)',
            'long_name': 'Normalized Burn Ratio 2',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://www.usgs.gov/core-science-systems/nli/landsat/landsat-normalized-burn-ratio-2',
            'short_name': 'NBR2'
        },
        'NBRT1': {
            'application_domain': 'burn',
            'bands': ['N', 'S2', 'T1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - (S2 * T1 / 10000.0)) / (N + (S2 * T1 / 10000.0))',
            'long_name': 'Normalized Burn Ratio Thermal 1',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.1080/01431160500239008',
            'short_name': 'NBRT1'
        },
        'NBRT2': {
            'application_domain': 'burn',
            'bands': ['N', 'T1', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': '((N / (T1 / 10000.0)) - S2) / ((N / (T1 / 10000.0)) + S2)',
            'long_name': 'Normalized Burn Ratio Thermal 2',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.1080/01431160500239008',
            'short_name': 'NBRT2'
        },
        'NBRT3': {
            'application_domain': 'burn',
            'bands': ['N', 'T1', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': '((N - (T1 / 10000.0)) - S2) / ((N - (T1 / 10000.0)) + S2)',
            'long_name': 'Normalized Burn Ratio Thermal 3',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.1080/01431160500239008',
            'short_name': 'NBRT3'
        },
        'NBSIMS': {
            'application_domain': 'snow',
            'bands': ['G', 'R', 'N', 'B', 'S2', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-09',
            'formula': '0.36 * (G + R + N) - (((B + S2)/G) + S1)',
            'long_name': 'Non-Binary Snow Index for Multi-Component Surfaces',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs13142777',
            'short_name': 'NBSIMS'
        },
        'NBUI': {
            'application_domain': 'urban',
            'bands': ['S1', 'N', 'T1', 'R', 'L', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '((S1 - N)/(10.0 * (T1 + S1) ** 0.5)) - (((N - R) * (1.0 + L))/(N - R + L)) - (G - S1)/(G + S1)',
            'long_name': 'New Built-Up Index',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://hdl.handle.net/1959.11/29500',
            'short_name': 'NBUI'
        },
        'ND705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(RE2 - RE1)/(RE2 + RE1)',
            'long_name': 'Normalized Difference (705 and 750 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(02)00010-X',
            'short_name': 'ND705'
        },
        'NDBI': {
            'application_domain': 'urban',
            'bands': ['S1', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '(S1 - N) / (S1 + N)',
            'long_name': 'Normalized Difference Built-Up Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'http://dx.doi.org/10.1080/01431160304987',
            'short_name': 'NDBI'
        },
        'NDBaI': {
            'application_domain': 'urban',
            'bands': ['S1', 'T1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-17',
            'formula': '(S1 - T1) / (S1 + T1)',
            'long_name': 'Normalized Difference Bareness Index',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.1109/IGARSS.2005.1526319',
            'short_name': 'NDBaI'
        },
        'NDDI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(((N - R)/(N + R)) - ((G - N)/(G + N)))/(((N - R)/(N + R)) + ((G - N)/(G + N)))',
            'long_name': 'Normalized Difference Drought Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1029/2006GL029127',
            'short_name': 'NDDI'
        },
        'NDGI': {
            'application_domain': 'vegetation',
            'bands': ['lambdaN', 'lambdaR', 'lambdaG', 'G', 'N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-20',
            'formula': '(((lambdaN - lambdaR)/(lambdaN - lambdaG)) * G + (1.0 - ((lambdaN - lambdaR)/(lambdaN - lambdaG))) * N - R)/(((lambdaN - lambdaR)/(lambdaN - lambdaG)) * G + (1.0 - ((lambdaN - lambdaR)/(lambdaN - lambdaG))) * N + R)',
            'long_name': 'Normalized Difference Greenness Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2019.03.028',
            'short_name': 'NDGI'
        },
        'NDGlaI': {
            'application_domain': 'snow',
            'bands': ['G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(G - R)/(G + R)',
            'long_name': 'Normalized Difference Glacier Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1080/01431160802385459',
            'short_name': 'NDGlaI'
        },
        'NDII': {
            'application_domain': 'vegetation',
            'bands': ['N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-20',
            'formula': '(N - S1)/(N + S1)',
            'long_name': 'Normalized Difference Infrared Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://www.asprs.org/wp-content/uploads/pers/1983journal/jan/1983_jan_77-83.pdf',
            'short_name': 'NDII'
        },
        'NDISIb': {
            'application_domain': 'urban',
            'bands': ['T1', 'B', 'N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '(T1 - (B + N + S1) / 3.0)/(T1 + (B + N + S1) / 3.0)',
            'long_name': 'Normalized Difference Impervious Surface Index Blue',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.14358/PERS.76.5.557',
            'short_name': 'NDISIb'
        },
        'NDISIg': {
            'application_domain': 'urban',
            'bands': ['T1', 'G', 'N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '(T1 - (G + N + S1) / 3.0)/(T1 + (G + N + S1) / 3.0)',
            'long_name': 'Normalized Difference Impervious Surface Index Green',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.14358/PERS.76.5.557',
            'short_name': 'NDISIg'
        },
        'NDISImndwi': {
            'application_domain': 'urban',
            'bands': ['T1', 'G', 'S1', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '(T1 - (((G - S1)/(G + S1)) + N + S1) / 3.0)/(T1 + (((G - S1)/(G + S1)) + N + S1) / 3.0)',
            'long_name': 'Normalized Difference Impervious Surface Index with MNDWI',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.14358/PERS.76.5.557',
            'short_name': 'NDISImndwi'
        },
        'NDISIndwi': {
            'application_domain': 'urban',
            'bands': ['T1', 'G', 'N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '(T1 - (((G - N)/(G + N)) + N + S1) / 3.0)/(T1 + (((G - N)/(G + N)) + N + S1) / 3.0)',
            'long_name': 'Normalized Difference Impervious Surface Index with NDWI',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.14358/PERS.76.5.557',
            'short_name': 'NDISIndwi'
        },
        'NDISIr': {
            'application_domain': 'urban',
            'bands': ['T1', 'R', 'N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '(T1 - (R + N + S1) / 3.0)/(T1 + (R + N + S1) / 3.0)',
            'long_name': 'Normalized Difference Impervious Surface Index Red',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.14358/PERS.76.5.557',
            'short_name': 'NDISIr'
        },
        'NDMI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'S1'],
            'contributor': 'https://github.com/bpurinton',
            'date_of_addition': '2021-12-01',
            'formula': '(N - S1)/(N + S1)',
            'long_name': 'Normalized Difference Moisture Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/S0034-4257(01)00318-2',
            'short_name': 'NDMI'
        },
        'NDPI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'alpha', 'R', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-20',
            'formula': '(N - (alpha * R + (1.0 - alpha) * S1))/(N + (alpha * R + (1.0 - alpha) * S1))',
            'long_name': 'Normalized Difference Phenology Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.rse.2017.04.031',
            'short_name': 'NDPI'
        },
        'NDPolI': {
            'application_domain': 'radar',
            'bands': ['VV', 'VH'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': '(VV - VH)/(VV + VH)',
            'long_name': 'Normalized Difference Polarization Index',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://www.isprs.org/proceedings/XXXVII/congress/4_pdf/267.pdf',
            'short_name': 'NDPolI'
        },
        'NDREI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-13',
            'formula': '(N - RE1) / (N + RE1)',
            'long_name': 'Normalized Difference Red Edge Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/1011-1344(93)06963-4',
            'short_name': 'NDREI'
        },
        'NDSI': {
            'application_domain': 'snow',
            'bands': ['G', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(G - S1) / (G + S1)',
            'long_name': 'Normalized Difference Snow Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1109/IGARSS.1994.399618',
            'short_name': 'NDSI'
        },
        'NDSII': {
            'application_domain': 'snow',
            'bands': ['G', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(G - N)/(G + N)',
            'long_name': 'Normalized Difference Snow Ice Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1080/01431160802385459',
            'short_name': 'NDSII'
        },
        'NDSInw': {
            'application_domain': 'snow',
            'bands': ['N', 'S1', 'beta'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(N - S1 - beta)/(N + S1)',
            'long_name': 'Normalized Difference Snow Index with no Water',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/w12051339',
            'short_name': 'NDSInw'
        },
        'NDSaII': {
            'application_domain': 'snow',
            'bands': ['R', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '(R - S1) / (R + S1)',
            'long_name': 'Normalized Difference Snow and Ice Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1080/01431160119766',
            'short_name': 'NDSaII'
        },
        'NDSoI': {
            'application_domain': 'urban',
            'bands': ['S2', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '(S2 - G)/(S2 + G)',
            'long_name': 'Normalized Difference Soil Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1016/j.jag.2015.02.010',
            'short_name': 'NDSoiI'
        },
        'NDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - R)/(N + R)',
            'long_name': 'Normalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://ntrs.nasa.gov/citations/19740022614',
            'short_name': 'NDVI'
        },
        'NDVI705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': '(RE2 - RE1) / (RE2 + RE1)',
            'long_name': 'Normalized Difference Vegetation Index (705 and 750 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0176-1617(11)81633-0',
            'short_name': 'NDVI705'
        },
        'NDVIMNDWI': {
            'application_domain': 'water',
            'bands': ['N', 'R', 'G', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-17',
            'formula': '((N - R)/(N + R)) - ((G - S1)/(G + S1))',
            'long_name': 'NDVI-MNDWI Model',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1007/978-3-662-45737-5_51',
            'short_name': 'NDVIMNDWI'
        },
        'NDVIT': {
            'application_domain': 'burn',
            'bands': ['N', 'R', 'T1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(N - (R * T1 / 10000.0))/(N + (R * T1 / 10000.0))',
            'long_name': 'Normalized Difference Vegetation Index Thermal',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.1080/01431160600954704',
            'short_name': 'NDVIT'
        },
        'NDWI': {
            'application_domain': 'water',
            'bands': ['G', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(G - N) / (G + N)',
            'long_name': 'Normalized Difference Water Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1080/01431169608948714',
            'short_name': 'NDWI'
        },
        'NDWIns': {
            'application_domain': 'water',
            'bands': ['G', 'alpha', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(G - alpha * N)/(G + N)',
            'long_name': 'Normalized Difference Water Index with no Snow Cover and Glaciers',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.3390/w12051339',
            'short_name': 'NDWIns'
        },
        'NDYI': {
            'application_domain': 'vegetation',
            'bands': ['G', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '(G - B) / (G + B)',
            'long_name': 'Normalized Difference Yellowness Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2016.06.016',
            'short_name': 'NDYI'
        },
        'NGRDI': {
            'application_domain': 'vegetation',
            'bands': ['G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(G - R) / (G + R)',
            'long_name': 'Normalized Green Red Difference Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(79)90013-0',
            'short_name': 'NGRDI'
        },
        'NHFD': {
            'application_domain': 'urban',
            'bands': ['RE1', 'A'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-17',
            'formula': '(RE1 - A) / (RE1 + A)',
            'long_name': 'Non-Homogeneous Feature Difference',
            'platforms': ['Sentinel-2'],
            'reference': 'https://www.semanticscholar.org/paper/Using-WorldView-2-Vis-NIR-MSI-Imagery-to-Support-Wolf/5e5063ccc4ee76b56b721c866e871d47a77f9fb4',
            'short_name': 'NHFD'
        },
        'NIRv': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-16',
            'formula': '((N - R) / (N + R)) * N',
            'long_name': 'Near-Infrared Reflectance of Vegetation',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1126/sciadv.1602244',
            'short_name': 'NIRv'
        },
        'NIRvH2': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'k', 'lambdaN', 'lambdaR'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-17',
            'formula': 'N - R - k * (lambdaN - lambdaR)',
            'long_name': 'Hyperspectral Near-Infrared Reflectance of Vegetation',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2021.112723',
            'short_name': 'NIRvH2'
        },
        'NIRvP': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'PAR'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-18',
            'formula': '((N - R) / (N + R)) * N * PAR',
            'long_name': 'Near-Infrared Reflectance of Vegetation and Incoming PAR',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.rse.2021.112763',
            'short_name': 'NIRvP'
        },
        'NLI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-11',
            'formula': '((N ** 2) - R)/((N ** 2) + R)',
            'long_name': 'Non-Linear Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1080/02757259409532252',
            'short_name': 'NLI'
        },
        'NMDI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'S1', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-11',
            'formula': '(N - (S1 - S2))/(N + (S1 - S2))',
            'long_name': 'Normalized Multi-band Drought Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1029/2007GL031021',
            'short_name': 'NMDI'
        },
        'NRFIg': {
            'application_domain': 'vegetation',
            'bands': ['G', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '(G - S2) / (G + S2)',
            'long_name': 'Normalized Rapeseed Flowering Index Green',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs13010105',
            'short_name': 'NRFIg'
        },
        'NRFIr': {
            'application_domain': 'vegetation',
            'bands': ['R', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '(R - S2) / (R + S2)',
            'long_name': 'Normalized Rapeseed Flowering Index Red',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs13010105',
            'short_name': 'NRFIr'
        },
        'NSDS': {
            'application_domain': 'urban',
            'bands': ['S1', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '(S1 - S2)/(S1 + S2)',
            'long_name': 'Normalized Shortwave Infrared Difference Soil-Moisture',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/land10030231',
            'short_name': 'NSDS'
        },
        'NWI': {
            'application_domain': 'water',
            'bands': ['B', 'N', 'S1', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-17',
            'formula': '(B - (N + S1 + S2))/(B + (N + S1 + S2))',
            'long_name': 'New Water Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.11873/j.issn.1004-0323.2009.2.167',
            'short_name': 'NWI'
        },
        'NormG': {
            'application_domain': 'vegetation',
            'bands': ['G', 'N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'G/(N + G + R)',
            'long_name': 'Normalized Green',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.2134/agronj2004.0314',
            'short_name': 'NormG'
        },
        'NormNIR': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'N/(N + G + R)',
            'long_name': 'Normalized NIR',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.2134/agronj2004.0314',
            'short_name': 'NormNIR'
        },
        'NormR': {
            'application_domain': 'vegetation',
            'bands': ['R', 'N', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'R/(N + G + R)',
            'long_name': 'Normalized Red',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.2134/agronj2004.0314',
            'short_name': 'NormR'
        },
        'OCVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'R', 'cexp'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-13',
            'formula': '(N / G) * (R / G) ** cexp',
            'long_name': 'Optimized Chlorophyll Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'http://dx.doi.org/10.1007/s11119-008-9075-z',
            'short_name': 'OCVI'
        },
        'OSAVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-11',
            'formula': '(N - R) / (N + R + 0.16)',
            'long_name': 'Optimized Soil-Adjusted Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(95)00186-7',
            'short_name': 'OSAVI'
        },
        'PISI': {
            'application_domain': 'urban',
            'bands': ['B', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-18',
            'formula': '0.8192 * B - 0.5735 * N + 0.0750',
            'long_name': 'Perpendicular Impervious Surface Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.3390/rs10101521',
            'short_name': 'PISI'
        },
        'PSRI': {
            'application_domain': 'vegetation',
            'bands': ['R', 'B', 'RE2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(R - B)/RE2',
            'long_name': 'Plant Senescing Reflectance Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1034/j.1399-3054.1999.106119.x',
            'short_name': 'PSRI'
        },
        'QpRVI': {
            'application_domain': 'radar',
            'bands': ['HV', 'HH', 'VV'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-12-24',
            'formula': '(8.0 * HV)/(HH + VV + 2.0 * HV)',
            'long_name': 'Quad-Polarized Radar Vegetation Index',
            'platforms': [],
            'reference': 'https://doi.org/10.1109/IGARSS.2001.976856',
            'short_name': 'QpRVI'
        },
        'RCC': {
            'application_domain': 'vegetation',
            'bands': ['R', 'G', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-17',
            'formula': 'R / (R + G + B)',
            'long_name': 'Red Chromatic Coordinate',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(87)90088-5',
            'short_name': 'RCC'
        },
        'RDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '(N - R) / ((N + R) ** 0.5)',
            'long_name': 'Renormalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(94)00114-3',
            'short_name': 'RDVI'
        },
        'REDSI': {
            'application_domain': 'vegetation',
            'bands': ['RE3', 'R', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': '((705.0 - 665.0) * (RE3 - R) - (783.0 - 665.0) * (RE1 - R)) / (2.0 * R)',
            'long_name': 'Red-Edge Disease Stress Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.3390/s18030868',
            'short_name': 'REDSI'
        },
        'RENDVI': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-09',
            'formula': '(RE2 - RE1)/(RE2 + RE1)',
            'long_name': 'Red Edge Normalized Difference Vegetation Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0176-1617(11)81633-0',
            'short_name': 'RENDVI'
        },
        'RFDI': {
            'application_domain': 'radar',
            'bands': ['HH', 'HV'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-12-25',
            'formula': '(HH - HV)/(HH + HV)',
            'long_name': 'Radar Forest Degradation Index',
            'platforms': ['Sentinel-1 (Dual Polarisation HH-HV)'],
            'reference': 'https://doi.org/10.5194/bg-9-179-2012',
            'short_name': 'RFDI'
        },
        'RGBVI': {
            'application_domain': 'vegetation',
            'bands': ['G', 'B', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(G ** 2.0 - B * R)/(G ** 2.0 + B * R)',
            'long_name': 'Red Green Blue Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.jag.2015.02.012',
            'short_name': 'RGBVI'
        },
        'RGRI': {
            'application_domain': 'vegetation',
            'bands': ['R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'R/G',
            'long_name': 'Red-Green Ratio Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.jag.2014.03.018',
            'short_name': 'RGRI'
        },
        'RI': {
            'application_domain': 'vegetation',
            'bands': ['R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-09',
            'formula': '(R - G)/(R + G)',
            'long_name': 'Redness Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://www.documentation.ird.fr/hor/fdi:34390',
            'short_name': 'RI'
        },
        'RVI': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': 'RE2 / R',
            'long_name': 'Ratio Vegetation Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.2134/agronj1968.00021962006000060016x',
            'short_name': 'RVI'
        },
        'S2REP': {
            'application_domain': 'vegetation',
            'bands': ['RE3', 'R', 'RE1', 'RE2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-17',
            'formula': '705.0 + 35.0 * ((((RE3 + R) / 2.0) - RE1) / (RE2 - RE1))',
            'long_name': 'Sentinel-2 Red-Edge Position',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/j.isprsjprs.2013.04.007',
            'short_name': 'S2REP'
        },
        'S2WI': {
            'application_domain': 'water',
            'bands': ['RE1', 'S2'],
            'contributor': 'https://github.com/MATRIX4284',
            'date_of_addition': '2022-03-06',
            'formula': '(RE1 - S2)/(RE1 + S2)',
            'long_name': 'Sentinel-2 Water Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.3390/w13121647',
            'short_name': 'S2WI'
        },
        'S3': {
            'application_domain': 'snow',
            'bands': ['N', 'R', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '(N * (R - S1)) / ((N + R) * (N + S1))',
            'long_name': 'S3 Snow Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3178/jjshwr.12.28',
            'short_name': 'S3'
        },
        'SARVI': {
            'application_domain': 'vegetation',
            'bands': ['L', 'N', 'R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-11',
            'formula': '(1 + L)*(N - (R - (R - B))) / (N + (R - (R - B)) + L)',
            'long_name': 'Soil Adjusted and Atmospherically Resistant Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1109/36.134076',
            'short_name': 'SARVI'
        },
        'SAVI': {
            'application_domain': 'vegetation',
            'bands': ['L', 'N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(1.0 + L) * (N - R) / (N + R + L)',
            'long_name': 'Soil-Adjusted Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(88)90106-X',
            'short_name': 'SAVI'
        },
        'SAVI2': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R', 'slb', 'sla'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': 'N / (R + (slb / sla))',
            'long_name': 'Soil-Adjusted Vegetation Index 2',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1080/01431169008955053',
            'short_name': 'SAVI2'
        },
        'SAVIT': {
            'application_domain': 'burn',
            'bands': ['L', 'N', 'R', 'T1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(1.0 + L) * (N - (R * T1 / 10000.0)) / (N + (R * T1 / 10000.0) + L)',
            'long_name': 'Soil-Adjusted Vegetation Index Thermal',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.1080/01431160600954704',
            'short_name': 'SAVIT'
        },
        'SI': {
            'application_domain': 'vegetation',
            'bands': ['B', 'G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '((1.0 - B) * (1.0 - G) * (1.0 - R)) ** (1/3)',
            'long_name': 'Shadow Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.465.8749&rep=rep1&type=pdf',
            'short_name': 'SI'
        },
        'SIPI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'A', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-17',
            'formula': '(N - A) / (N - R)',
            'long_name': 'Structure Insensitive Pigment Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI'],
            'reference': 'https://eurekamag.com/research/009/395/009395053.php',
            'short_name': 'SIPI'
        },
        'SR': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'N/R',
            'long_name': 'Simple Ratio',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.2307/1936256',
            'short_name': 'SR'
        },
        'SR2': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-09',
            'formula': 'N/G',
            'long_name': 'Simple Ratio (800 and 550 nm)',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1080/01431169308904370',
            'short_name': 'SR2'
        },
        'SR3': {
            'application_domain': 'vegetation',
            'bands': ['N2', 'G', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-09',
            'formula': 'N2/(G * RE1)',
            'long_name': 'Simple Ratio (860, 550 and 708 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(98)00046-7',
            'short_name': 'SR3'
        },
        'SR555': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': 'RE2 / G',
            'long_name': 'Simple Ratio (555 and 750 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0176-1617(11)81633-0',
            'short_name': 'SR555'
        },
        'SR705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': 'RE2 / RE1',
            'long_name': 'Simple Ratio (705 and 750 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0176-1617(11)81633-0',
            'short_name': 'SR705'
        },
        'SWI': {
            'application_domain': 'snow',
            'bands': ['G', 'N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '(G * (N - S1)) / ((G + N) * (N + S1))',
            'long_name': 'Snow Water Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs11232774',
            'short_name': 'SWI'
        },
        'SWM': {
            'application_domain': 'water',
            'bands': ['B', 'G', 'N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-20',
            'formula': '(B + G)/(N + S1)',
            'long_name': 'Sentinel Water Mask',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://eoscience.esa.int/landtraining2017/files/posters/MILCZAREK.pdf',
            'short_name': 'SWM'
        },
        'SeLI': {
            'application_domain': 'vegetation',
            'bands': ['N2', 'RE1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-08',
            'formula': '(N2 - RE1) / (N2 + RE1)',
            'long_name': 'Sentinel-2 LAI Green Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.3390/s19040904',
            'short_name': 'SeLI'
        },
        'TCARI': {
            'application_domain': 'vegetation',
            'bands': ['RE1', 'R', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-13',
            'formula': '3 * ((RE1 - R) - 0.2 * (RE1 - G) * (RE1 / R))',
            'long_name': 'Transformed Chlorophyll Absorption in Reflectance Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(02)00018-4',
            'short_name': 'TCARI'
        },
        'TCARIOSAVI': {
            'application_domain': 'vegetation',
            'bands': ['RE1', 'R', 'G', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': '(3 * ((RE1 - R) - 0.2 * (RE1 - G) * (RE1 / R))) / (1.16 * (N - R) / (N + R + 0.16))',
            'long_name': 'TCARI/OSAVI Ratio',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(02)00018-4',
            'short_name': 'TCARIOSAVI'
        },
        'TCARIOSAVI705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1', 'G'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-11-06',
            'formula': '(3 * ((RE2 - RE1) - 0.2 * (RE2 - G) * (RE2 / RE1))) / (1.16 * (RE2 - RE1) / (RE2 + RE1 + 0.16))',
            'long_name': 'TCARI/OSAVI Ratio (705 and 750 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/j.agrformet.2008.03.005',
            'short_name': 'TCARIOSAVI705'
        },
        'TCI': {
            'application_domain': 'vegetation',
            'bands': ['RE1', 'G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '1.2 * (RE1 - G) - 1.5 * (R - G) * (RE1 / R) ** 0.5',
            'long_name': 'Triangular Chlorophyll Index',
            'platforms': ['Sentinel-2'],
            'reference': 'http://dx.doi.org/10.1109/TGRS.2007.904836',
            'short_name': 'TCI'
        },
        'TDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-09',
            'formula': '1.5 * ((N - R)/((N ** 2.0 + R + 0.5) ** 0.5))',
            'long_name': 'Transformed Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1109/IGARSS.2002.1026867',
            'short_name': 'TDVI'
        },
        'TGI': {
            'application_domain': 'vegetation',
            'bands': ['R', 'G', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '- 0.5 * (190 * (R - G) - 120 * (R - B))',
            'long_name': 'Triangular Greenness Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'http://dx.doi.org/10.1016/j.jag.2012.07.020',
            'short_name': 'TGI'
        },
        'TRRVI': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'R', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '((RE2 - R) / (RE2 + R)) / (((N - R) / (N + R)) + 1.0)',
            'long_name': 'Transformed Red Range Vegetation Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.3390/rs12152359',
            'short_name': 'TRRVI'
        },
        'TSAVI': {
            'application_domain': 'vegetation',
            'bands': ['sla', 'N', 'R', 'slb'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': 'sla * (N - sla * R - slb) / (sla * N + R - sla * slb)',
            'long_name': 'Transformed Soil-Adjusted Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1109/IGARSS.1989.576128',
            'short_name': 'TSAVI'
        },
        'TTVI': {
            'application_domain': 'vegetation',
            'bands': ['RE3', 'RE2', 'N2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '0.5 * ((865.0 - 740.0) * (RE3 - RE2) - (N2 - RE2) * (783.0 - 740))',
            'long_name': 'Transformed Triangular Vegetation Index',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.3390/rs12010016',
            'short_name': 'TTVI'
        },
        'TVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(((N - R)/(N + R)) + 0.5) ** 0.5',
            'long_name': 'Transformed Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://ntrs.nasa.gov/citations/19740022614',
            'short_name': 'TVI'
        },
        'TriVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '0.5 * (120 * (N - G) - 200 * (R - G))',
            'long_name': 'Triangular Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'http://dx.doi.org/10.1016/S0034-4257(00)00197-8',
            'short_name': 'TriVI'
        },
        'UI': {
            'application_domain': 'urban',
            'bands': ['S2', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-02-07',
            'formula': '(S2 - N)/(S2 + N)',
            'long_name': 'Urban Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://www.isprs.org/proceedings/XXXI/congress/part7/321_XXXI-part7.pdf',
            'short_name': 'UI'
        },
        'VARI': {
            'application_domain': 'vegetation',
            'bands': ['G', 'R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(G - R) / (G + R - B)',
            'long_name': 'Visible Atmospherically Resistant Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/S0034-4257(01)00289-9',
            'short_name': 'VARI'
        },
        'VARI700': {
            'application_domain': 'vegetation',
            'bands': ['RE1', 'R', 'B'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-20',
            'formula': '(RE1 - 1.7 * R + 0.7 * B) / (RE1 + 1.3 * R - 1.3 * B)',
            'long_name': 'Visible Atmospherically Resistant Index (700 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(01)00289-9',
            'short_name': 'VARI700'
        },
        'VDDPI': {
            'application_domain': 'radar',
            'bands': ['VV', 'VH'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': '(VV + VH)/VV',
            'long_name': 'Vertical Dual De-Polarization Index',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.1016/j.rse.2018.09.003',
            'short_name': 'VDDPI'
        },
        'VHVVD': {
            'application_domain': 'radar',
            'bands': ['VH', 'VV'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': 'VH - VV',
            'long_name': 'VH-VV Difference',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.3390/app9040655',
            'short_name': 'VHVVD'
        },
        'VHVVP': {
            'application_domain': 'radar',
            'bands': ['VH', 'VV'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': 'VH * VV',
            'long_name': 'VH-VV Product',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.1109/IGARSS47720.2021.9554099',
            'short_name': 'VHVVP'
        },
        'VHVVR': {
            'application_domain': 'radar',
            'bands': ['VH', 'VV'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': 'VH/VV',
            'long_name': 'VH-VV Ratio',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.1109/IGARSS47720.2021.9554099',
            'short_name': 'VHVVR'
        },
        'VI6T': {
            'application_domain': 'burn',
            'bands': ['N', 'T1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': '(N - T1/10000.0)/(N + T1/10000.0)',
            'long_name': 'VI6T Index',
            'platforms': ['Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+'],
            'reference': 'https://doi.org/10.1080/01431160500239008',
            'short_name': 'VI6T'
        },
        'VI700': {
            'application_domain': 'vegetation',
            'bands': ['RE1', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-20',
            'formula': '(RE1 - R) / (RE1 + R)',
            'long_name': 'Vegetation Index (700 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(01)00289-9',
            'short_name': 'VI700'
        },
        'VIG': {
            'application_domain': 'vegetation',
            'bands': ['G', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-20',
            'formula': '(G - R) / (G + R)',
            'long_name': 'Vegetation Index Green',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/S0034-4257(01)00289-9',
            'short_name': 'VIG'
        },
        'VVVHD': {
            'application_domain': 'radar',
            'bands': ['VV', 'VH'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': 'VV - VH',
            'long_name': 'VV-VH Difference',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.1109/IGARSS47720.2021.9554099',
            'short_name': 'VVVHD'
        },
        'VVVHR': {
            'application_domain': 'radar',
            'bands': ['VV', 'VH'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': 'VV/VH',
            'long_name': 'VV-VH Ratio',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.3390/app9040655',
            'short_name': 'VVVHR'
        },
        'VVVHS': {
            'application_domain': 'radar',
            'bands': ['VV', 'VH'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-19',
            'formula': 'VV + VH',
            'long_name': 'VV-VH Sum',
            'platforms': ['Sentinel-1 (Dual Polarisation VV-VH)'],
            'reference': 'https://doi.org/10.1109/IGARSS47720.2021.9554099',
            'short_name': 'VVVHS'
        },
        'VgNIRBI': {
            'application_domain': 'urban',
            'bands': ['G', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-02-09',
            'formula': '(G - N)/(G + N)',
            'long_name': 'Visible Green-Based Built-Up Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.ecolind.2015.03.037',
            'short_name': 'VgNIRBI'
        },
        'VrNIRBI': {
            'application_domain': 'urban',
            'bands': ['R', 'N'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-02-09',
            'formula': '(R - N)/(R + N)',
            'long_name': 'Visible Red-Based Built-Up Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/j.ecolind.2015.03.037',
            'short_name': 'VrNIRBI'
        },
        'WDRVI': {
            'application_domain': 'vegetation',
            'bands': ['alpha', 'N', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': '(alpha * N - R) / (alpha * N + R)',
            'long_name': 'Wide Dynamic Range Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1078/0176-1617-01176',
            'short_name': 'WDRVI'
        },
        'WDVI': {
            'application_domain': 'vegetation',
            'bands': ['N', 'sla', 'R'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-14',
            'formula': 'N - sla * R',
            'long_name': 'Weighted Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1016/0034-4257(89)90076-X',
            'short_name': 'WDVI'
        },
        'WI1': {
            'application_domain': 'water',
            'bands': ['G', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '(G - S2) / (G + S2)',
            'long_name': 'Water Index 1',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs11182186',
            'short_name': 'WI1'
        },
        'WI2': {
            'application_domain': 'water',
            'bands': ['B', 'S2'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-09-18',
            'formula': '(B - S2) / (B + S2)',
            'long_name': 'Water Index 2',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.3390/rs11182186',
            'short_name': 'WI2'
        },
        'WRI': {
            'application_domain': 'water',
            'bands': ['G', 'R', 'N', 'S1'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-01-17',
            'formula': '(G + R)/(N + S1)',
            'long_name': 'Water Ratio Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS'],
            'reference': 'https://doi.org/10.1109/GEOINFORMATICS.2010.5567762',
            'short_name': 'WRI'
        },
        'kEVI': {
            'application_domain': 'kernel',
            'bands': ['g', 'kNN', 'kNR', 'C1', 'C2', 'kNB', 'kNL'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-10',
            'formula': 'g * (kNN - kNR) / (kNN + C1 * kNR - C2 * kNB + kNL)',
            'long_name': 'Kernel Enhanced Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1126/sciadv.abc7447',
            'short_name': 'kEVI'
        },
        'kIPVI': {
            'application_domain': 'kernel',
            'bands': ['kNN', 'kNR'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': 'kNN/(kNN + kNR)',
            'long_name': 'Kernel Infrared Percentage Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1126/sciadv.abc7447',
            'short_name': 'kIPVI'
        },
        'kNDVI': {
            'application_domain': 'kernel',
            'bands': ['kNN', 'kNR'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': '(kNN - kNR)/(kNN + kNR)',
            'long_name': 'Kernel Normalized Difference Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1126/sciadv.abc7447',
            'short_name': 'kNDVI'
        },
        'kRVI': {
            'application_domain': 'kernel',
            'bands': ['kNN', 'kNR'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-04-07',
            'formula': 'kNN / kNR',
            'long_name': 'Kernel Ratio Vegetation Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1126/sciadv.abc7447',
            'short_name': 'kRVI'
        },
        'kVARI': {
            'application_domain': 'kernel',
            'bands': ['kGG', 'kGR', 'kGB'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2021-05-10',
            'formula': '(kGG - kGR) / (kGG + kGR - kGB)',
            'long_name': 'Kernel Visible Atmospherically Resistant Index',
            'platforms': ['Sentinel-2', 'Landsat-OLI', 'Landsat-TM', 'Landsat-ETM+', 'MODIS', 'Planet-Fusion'],
            'reference': 'https://doi.org/10.1126/sciadv.abc7447',
            'short_name': 'kVARI'
        },
        'mND705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'RE1', 'A'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(RE2 - RE1)/(RE2 + RE1 - A)',
            'long_name': 'Modified Normalized Difference (705, 750 and 445 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(02)00010-X',
            'short_name': 'mND705'
        },
        'mSR705': {
            'application_domain': 'vegetation',
            'bands': ['RE2', 'A'],
            'contributor': 'https://github.com/davemlz',
            'date_of_addition': '2022-04-08',
            'formula': '(RE2 - A)/(RE2 + A)',
            'long_name': 'Modified Simple Ratio (705 and 445 nm)',
            'platforms': ['Sentinel-2'],
            'reference': 'https://doi.org/10.1016/S0034-4257(02)00010-X',
            'short_name': 'mSR705'
        }
    }
};

/*
=======
Exports
=======
*/

exports.indices = spectralIndices.SpectralIndices;